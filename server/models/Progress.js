import mongoose from "mongoose";

const progressSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  completedLessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  lastAccessedLesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  completionDate: {
    type: Date,
  },
  completionPercentage: {
    type: Number,
    default: 0,
  },
});
// 1 PROGRESS RECORD PER COURSE
progressSchema.index({ user: 1, course: 1 }, { unique: true });

const Progress = mongoose.model("Progress", progressSchema, "progress");

export default Progress;
