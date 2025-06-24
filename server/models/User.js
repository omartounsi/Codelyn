import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["viewer", "student", "admin"],
    default: "viewer",
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  subscriptionDate: {
    type: Date,
  },
  profilePicture: {
    type: String,
    default: null, // URL to the profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema, "users");

export default User;
