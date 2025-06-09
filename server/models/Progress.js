import mongoose from "mongoose";

const progressSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseType: {
    type: String,
    required: true,
    enum: ["html", "css", "javascript"],
  },
  completedLessons: [
    {
      lessonId: {
        type: Number,
        required: true,
      },
      completedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  lastAccessedLesson: {
    type: Number,
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

// 1 PROGRESS RECORD PER COURSE TYPE PER USER
progressSchema.index({ user: 1, courseType: 1 }, { unique: true });

const Progress = mongoose.model("Progress", progressSchema, "progress");

export default Progress;
