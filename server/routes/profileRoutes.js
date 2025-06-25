import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import auth from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// ENSURE UPLOADS DIRECTORY EXISTS
const uploadsDir = path.join(process.cwd(), "uploads", "profile-pictures");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// CONFIGURE MULTER FOR FILE UPLOADS
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // CREATE UNIQUE FILENAME WITH USER ID AND TIMESTAMP
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, `${req.user.id}-${uniqueSuffix}${extension}`);
  },
});

// FILE FILTER
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("image only"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB LIMIT
  },
});

// UPLOAD PROFILE PICTURE
router.post(
  "/upload",
  auth,
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }

      // GET THE USER
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // DELETE OLD PROFILE PICTURE IF EXISTS
      if (user.profilePicture) {
        const oldImagePath = path.join(process.cwd(), user.profilePicture);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // UPDATE USER WITH NEW PROFILE PICTURE URL
      const profilePictureUrl = `/uploads/profile-pictures/${req.file.filename}`;
      user.profilePicture = profilePictureUrl;
      await user.save();

      res.json({
        success: true,
        message: "Profile picture updated successfully",
        profilePictureUrl: profilePictureUrl,
      });
    } catch (error) {
      console.error("Error uploading profile picture:", error);

      // DELETE UPLOADED FILE IF ERROR OCCURRED
      if (req.file) {
        const filePath = path.join(uploadsDir, req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      res.status(500).json({
        success: false,
        message: "Error uploading profile picture",
        error: error.message,
      });
    }
  }
);

// DELETE PROFILE PICTURE
router.delete("/delete", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // DELETE FILE IF EXISTS
    if (user.profilePicture) {
      const imagePath = path.join(process.cwd(), user.profilePicture);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // REMOVE PROFILE PICTURE FROM USER
    user.profilePicture = null;
    await user.save();

    res.json({
      success: true,
      message: "Profile picture deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting profile picture:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting profile picture",
      error: error.message,
    });
  }
});

// GET PROFILE PICTURE
router.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(uploadsDir, filename);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).json({
      success: false,
      message: "Image not found",
    });
  }
});

export default router;
