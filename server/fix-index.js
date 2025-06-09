/**
 * Database Index Maintenance Script
 *
 * Run this script whenever you:
 * - Add new course types (like 'javascript')
 * - Get E11000 duplicate key errors
 * - Change the Progress model schema
 *
 * Usage: node fix-index.js
 */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function fixIndex() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
    const collection = db.collection("progress");

    // Get current indexes
    const indexes = await collection.indexes();
    console.log("Current indexes:");
    indexes.forEach((index) => {
      console.log("  -", index.name, ":", JSON.stringify(index.key));
    });

    // Drop old index if it exists
    try {
      await collection.dropIndex("user_1_course_1");
      console.log("✓ Dropped old user_1_course_1 index");
    } catch (e) {
      console.log("✓ Old index user_1_course_1 not found");
    }

    // Drop any other old indexes that might conflict
    try {
      await collection.dropIndex({ user: 1, course: 1 });
      console.log("✓ Dropped old user_1_course_1 compound index");
    } catch (e) {
      console.log("✓ Old compound index not found");
    }

    // Ensure correct index exists
    try {
      await collection.createIndex(
        { user: 1, courseType: 1 },
        { unique: true }
      );
      console.log("✓ Created correct user_1_courseType_1 index");
    } catch (e) {
      console.log("✓ Correct index already exists");
    }

    // Clean up any malformed records
    const badRecords = await collection.find({ courseType: null }).toArray();
    if (badRecords.length > 0) {
      console.log(
        `⚠️  Found ${badRecords.length} bad records with null courseType`
      );
      console.log("Cleaning up...");
      await collection.deleteMany({ courseType: null });
      console.log("✓ Cleaned up bad records");
    } else {
      console.log("✓ No bad records found");
    }

    // Check final state
    const finalIndexes = await collection.indexes();
    console.log("\nFinal indexes:");
    finalIndexes.forEach((index) => {
      console.log("  -", index.name, ":", JSON.stringify(index.key));
    });

    await mongoose.disconnect();
    console.log("\n✓ Database index fix completed successfully");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

fixIndex();
