import express from "express";
import Course from "../models/Course.js";
import Progress from "../models/Progress.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET ALL COURSES
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().select("-lessons");
    res.json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET USER PROGRESS
router.get("/my/progress", auth, async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user._id })
      .populate("course", "title slug")
      .populate("lastAccessedLesson", "title");
    res.json(progress);
  } catch (err) {
    console.error("Error fetching progress:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//GET 1 COURSE WITH LESSONS (BEL ID)
router.get("/:slug", async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug }).populate({
      path: "lessons",
      options: { sort: { order: 1 } },
    }); //populate kima jointure
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    console.error("Error fetching course:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
