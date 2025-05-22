import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
// AUTH
app.use("/api/auth", authRoutes);

// MONGO
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo:", err);
  });

//
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}\n`);
});
