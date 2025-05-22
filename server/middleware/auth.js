import User from "../models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const auth = async (req, res, next) => {
  try {
    //EXTRACT TOKEN FROM HEADER
    const token = req.header("Authorization")?.replace("Bearer ", "");

    //check if token exists
    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    //verification - returns object that's been signed at token creation
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //find user using id and exclude password field
    const user = await User.findById(decoded.userId).select("-password");

    //check if user exists
    if (!user) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    //add the user to the request - verification passed
    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default auth;
