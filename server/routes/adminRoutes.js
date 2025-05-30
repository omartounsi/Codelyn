import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";
import Activity from "../models/Activity.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

//HEALTH
import process, { memoryUsage } from "process";
import os from "os";
import mongoose from "mongoose";

const router = express.Router();

router.use(auth, admin);

// DASH STATISTICS
router.get("/dashboard", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminsCount = await User.countDocuments({ role: "admin" });
    const studentsCount = await User.countDocuments({ role: "student" });
    const viewersCount = await User.countDocuments({ role: "viewer" });

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

    //SYS HEALTH
    const systemHealth = {
      //UPTIME
      uptime: process.uptime(),

      //MEMORY
      memoryUsage: {
        used: process.memoryUsage().heapUsed,
        total: process.memoryUsage().heapTotal,
        percentage: Math.round(
          (process.memoryUsage().heapUsed / process.memoryUsage().heapTotal) *
            100
        ),
      },

      //CPU
      cpu: {
        loadAverage: os.loadavg()[0],
        coreCount: os.cpus().length,
      },

      //SYS INFO
      platform: os.platform(),
      nodeVersion: process.version,

      //DATABASE
      database: {
        status:
          mongoose.connection.readyState === 1 ? "connected" : "disconnected",
        responseTime: await getDatabaseResponseTime(),
      },
    };

    res.json({
      stats: {
        userCount: totalUsers,
        adminsCount,
        viewersCount,
        studentsCount,
        courseCount,
        lessonCount,
      },
      recentUsers,
      recentActivities,
      systemHealth,
    });
  } catch (err) {
    console.error("Error fetching admin dashboard:", err);
    res.status(500).json({ message: "Here" });
  }
});

router.post("/create-user", async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;

    //VALIDATION
    if (!(first_name || last_name || email || password)) {
      return res.status(400).json({ message: "missing fields" });
    }

    //CHECK EXIST
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "user already exists" });
    }

    //VALID ROLE
    const validRoles = ["viewer", "student", "admin"];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ message: "invalid role format" });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
      role,
    });

    await newUser.save();

    //FEEDBACK
    const userResponse = {
      _id: newUser._id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt,
    };
    res.status(201).json({
      success: true,
      message: "User created",
      user: userResponse,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: " error while creating user" });
  }
});

//DB RESPONSE TIME
const getDatabaseResponseTime = async () => {
  const start = Date.now();
  await User.findOne().limit(1);
  return Date.now() - start;
};

export default router;
