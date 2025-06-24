import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  estimatedTime: {
    type: Number, // in minutes
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  videoUrl: {
    type: String,
  },
  codeSnippets: [
    {
      language: String,
      code: String,
      description: String,
    },
  ],
  resources: [
    {
      title: String,
      url: String,
      type: {
        type: String,
        enum: ["article", "video", "documentation", "tool"],
      },
    },
  ],
  quiz: [
    {
      question: String,
      options: [String],
      correctAnswer: Number,
      explanation: String,
    },
  ],
  isPublished: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create compound index for course and order to ensure ordering within a course
lessonSchema.index({ course: 1, order: 1 }, { unique: true });

// Pre-save hook to update the updatedAt field
lessonSchema.pre("save", function (next) {
  if (this.isModified() && !this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

const Lesson = mongoose.model("Lesson", lessonSchema, "lessons");

export default Lesson;
