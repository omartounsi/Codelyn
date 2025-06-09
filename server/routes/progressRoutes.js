import express from "express";
import Progress from "../models/Progress.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Get progress for all courses for a user
router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const progressRecords = await Progress.find({ user: userId });

    const progressData = {
      html: null,
      css: null,
      javascript: null,
    };

    progressRecords.forEach((record) => {
      progressData[record.courseType] = {
        completedLessons: record.completedLessons.map(
          (lesson) => lesson.lessonId
        ),
        totalLessons: getTotalLessonsForCourse(record.courseType),
        progress: record.completionPercentage,
        lastAccessed: record.lastAccessedLesson,
        startDate: record.startDate,
        completionDate: record.completionDate,
      };
    });

    res.json({ success: true, data: progressData });
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get progress for a specific course
router.get("/:courseType", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseType } = req.params;

    if (!["html", "css", "javascript"].includes(courseType)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course type" });
    }

    let progress = await Progress.findOne({ user: userId, courseType });

    if (!progress) {
      // Create new progress record if doesn't exist
      progress = new Progress({
        user: userId,
        courseType,
        completedLessons: [],
        completionPercentage: 0,
      });
      await progress.save();
    }

    const totalLessons = getTotalLessonsForCourse(courseType);
    const progressData = {
      completedLessons: progress.completedLessons.map(
        (lesson) => lesson.lessonId
      ),
      totalLessons,
      progress: progress.completionPercentage,
      lastAccessed: progress.lastAccessedLesson,
      startDate: progress.startDate,
      completionDate: progress.completionDate,
    };

    res.json({ success: true, data: progressData });
  } catch (error) {
    console.error("Error fetching course progress:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Mark lesson as completed
router.post("/complete", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseType, lessonId } = req.body;

    console.log("Complete endpoint - Request body:", req.body);
    console.log("Complete endpoint - userId:", userId);
    console.log("Complete endpoint - courseType:", courseType);
    console.log("Complete endpoint - lessonId:", lessonId);

    if (!["html", "css", "javascript"].includes(courseType)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course type" });
    }

    if (!lessonId || lessonId < 1) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid lesson ID" });
    }

    let progress = await Progress.findOne({ user: userId, courseType });
    console.log("Complete endpoint - Found existing progress:", !!progress);

    if (!progress) {
      console.log("Complete endpoint - Creating new progress record");
      progress = new Progress({
        user: userId,
        courseType,
        completedLessons: [],
        completionPercentage: 0,
      });
      console.log(
        "Complete endpoint - New progress object:",
        progress.toObject()
      );
    }

    // Check if lesson is already completed
    const isAlreadyCompleted = progress.completedLessons.some(
      (lesson) => lesson.lessonId === lessonId
    );

    if (!isAlreadyCompleted) {
      progress.completedLessons.push({
        lessonId,
        completedAt: new Date(),
      });

      // Update completion percentage
      const totalLessons = getTotalLessonsForCourse(courseType);
      progress.completionPercentage = Math.round(
        (progress.completedLessons.length / totalLessons) * 100
      );

      // Update last accessed lesson
      progress.lastAccessedLesson = lessonId;

      // Set completion date if all lessons are completed
      if (progress.completedLessons.length === totalLessons) {
        progress.completionDate = new Date();
      }

      await progress.save();
    }

    const progressData = {
      completedLessons: progress.completedLessons.map(
        (lesson) => lesson.lessonId
      ),
      totalLessons: getTotalLessonsForCourse(courseType),
      progress: progress.completionPercentage,
      lastAccessed: progress.lastAccessedLesson,
      startDate: progress.startDate,
      completionDate: progress.completionDate,
    };

    res.json({ success: true, data: progressData });
  } catch (error) {
    console.error("Error marking lesson complete:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Reset progress for a course
router.delete("/:courseType", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseType } = req.params;

    if (!["html", "css", "javascript"].includes(courseType)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course type" });
    }

    await Progress.findOneAndDelete({ user: userId, courseType });

    res.json({ success: true, message: "Progress reset successfully" });
  } catch (error) {
    console.error("Error resetting progress:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Helper function to get total lessons for each course
function getTotalLessonsForCourse(courseType) {
  const courseLessons = {
    html: 9,
    css: 9,
    javascript: 9, // Will be updated when JS lessons are added
  };
  return courseLessons[courseType] || 9;
}

export default router;
