import express from "express";
import bcrypt from "bcryptjs";
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
    if (!(first_name && last_name && email && password)) {
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

    //HASH PASS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role: role || "viewer", //defaultd
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

// GET ALL USERS
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });

    // Calculate overall progress for each user
    const usersWithProgress = await Promise.all(
      users.map(async (user) => {
        try {
          // Import Progress model dynamically to avoid circular dependency
          const { default: Progress } = await import("../models/Progress.js");

          // Get all progress records for this user
          const progressRecords = await Progress.find({ user: user._id });

          // Calculate overall progress using the same method as frontend
          // Total completed lessons across all courses / total possible lessons
          let overallProgress = 0;
          if (progressRecords.length > 0) {
            const totalCompletedLessons = progressRecords.reduce(
              (sum, record) => sum + (record.completedLessons?.length || 0),
              0
            );

            // Total possible lessons across all courses (HTML: 9, CSS: 9, JavaScript: 9)
            const totalPossibleLessons = 27; // 3 courses × 9 lessons each

            overallProgress = Math.round(
              (totalCompletedLessons / totalPossibleLessons) * 100
            );
          }

          return {
            ...user.toObject(),
            overallProgress,
          };
        } catch (progressErr) {
          console.error(
            `Error calculating progress for user ${user._id}:`,
            progressErr
          );
          return {
            ...user.toObject(),
            overallProgress: 0,
          };
        }
      })
    );

    res.json(usersWithProgress);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// DELETE USER
router.delete("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Don't allow deletion of the current admin
    if (userId === req.user.id) {
      return res
        .status(400)
        .json({ message: "Cannot delete your own account" });
    }

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

// UPDATE USER SUBSCRIPTION
router.patch("/users/:userId/subscription", async (req, res) => {
  try {
    const { userId } = req.params;
    const { isSubscribed } = req.body;

    const updateData = {
      isSubscribed,
      ...(isSubscribed && { subscriptionDate: new Date() }),
    };

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Subscription updated successfully", user });
  } catch (err) {
    console.error("Error updating subscription:", err);
    res.status(500).json({ message: "Failed to update subscription" });
  }
});

// UPDATE USER ROLE
router.patch("/users/:userId/role", async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    // Validate role
    const validRoles = ["viewer", "student", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Don't allow changing own role
    if (userId === req.user.id) {
      return res.status(400).json({ message: "Cannot change your own role" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Role updated successfully", user });
  } catch (err) {
    console.error("Error updating role:", err);
    res.status(500).json({ message: "Failed to update role" });
  }
});

export default router;
