import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import auth from "../middleware/auth.js";

dotenv.config();

const router = express.Router();

//REGISTER END-POINT
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // check if existing
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10); //10 rounds of hashing
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    //saving
    await user.save();

    //create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    //feedback
    res.status(201).json({
      token,
      user: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role || "viewer",
        isSubscribed: user.isSubscribed || false,
        profilePicture: user.profilePicture || null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

//LOGIN END-POINT
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check existing
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid" });
    }

    //create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    //feedback
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role || "viewer",
        isSubscribed: user.isSubscribed || false,
        profilePicture: user.profilePicture || null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

//VERIFY TOKEN
router.get("/verify", auth, async (req, res) => {
  // WHEN THIS ROUTE IS REACHER, THE AUTH MIDDLEWARE HAS VERIFIED THE TOKEN AND ATTACHED THE USER TO THE REQUEST
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //send user back
    res.json({
      user: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role || "viewer",
        isSubscribed: user.isSubscribed || false,
        profilePicture: user.profilePicture || null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
