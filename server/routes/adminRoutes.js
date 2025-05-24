import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";
import Activity from "../models/Activity.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.use(auth, admin);

// DASH STATISTICS
router.get("/dashboard", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const courseCount = await Course.countDocuments();
    const lessonCount = await Lesson.countDocuments();

    //RECENT SIGNUPS
    const recentUsers = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("first_name last_name email createdAt");

    //RECENT ACTIVITIES
    const recentActivities = await Activity.find()
      .sort({ timestamp: -1 })
      .limit(10);
    res.json({
      stats: {
        userCount,
        courseCount,
        lessonCount,
      },
      recentUsers,
      recentActivities,
    });
  } catch (err) {
    console.error("Error fetching admin dashboard:", err);
    res.status(500).json({ message: "Here" });
  }
});

export default router;
