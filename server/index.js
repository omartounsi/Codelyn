import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
// AUTH
app.use("/api/auth", authRoutes);
//COURSES
app.use("/api/courses", courseRoutes);
//ACTIVITIES
app.use("/api/activities", activityRoutes);
//FOR ADMIN
app.use("/api/admin", adminRoutes);

// MONGO
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo:", err);
  });

//test
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}\n`);
});
