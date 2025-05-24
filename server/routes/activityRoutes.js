import express from "express";
import Activity from "../models/Activity.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// LOG AN ACTIVITY

router.post("/log", auth, async (req, res) => {
  try {
    const { type, details } = req.body;

    const newActivity = new Activity({
      user: req.user._id,
      email: req.user.email,
      type,
      details,
    });
    //SAVE
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (err) {
    console.error("Error logging activity:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//GET ACTIVITIES (ADMIN ONLY)
router.get("/recent", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    const activities = await Activity.find().sort({ timestamp: -1 }).limit(20);
    res.json(activities);
  } catch (err) {
    console.error("Error fetching activities:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//GET ACTIVITIES(USER)
router.get("/my-activities", auth, async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user._id })
      .sort({ timestamp: -1 })
      .limit(10);
    res.json(activities);
  } catch (err) {
    console.error("Error fetching user activities:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
