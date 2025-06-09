import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const fixDatabaseIndexes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
    const collection = db.collection("progress");

    // Check existing indexes
    const indexes = await collection.indexes();
    console.log("Current indexes:", indexes);

    // Drop old conflicting index if it exists
    try {
      await collection.dropIndex("user_1_course_1");
      console.log("Dropped old index: user_1_course_1");
    } catch (error) {
      console.log("Old index not found or already dropped");
    }

    // Ensure correct index exists
    await collection.createIndex({ user: 1, courseType: 1 }, { unique: true });
    console.log("Created correct index: user_1_courseType_1");

    // Clean up any malformed records
    const badRecords = await collection.find({ courseType: null }).toArray();
    if (badRecords.length > 0) {
      console.log(
        `Found ${badRecords.length} bad records with null courseType`
      );
      await collection.deleteMany({ courseType: null });
      console.log("Cleaned up bad records");
    }

    console.log("Database indexes fixed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error fixing database:", error);
    process.exit(1);
  }
};

fixDatabaseIndexes();
