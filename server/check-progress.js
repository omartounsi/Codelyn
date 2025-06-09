import mongoose from 'mongoose';
import Progress from './models/Progress.js';

const MONGO_URI = "mongodb+srv://admin:kz2tvnyneLztSTbZ@cluster0.oppcb.mongodb.net/Codelyn";

async function checkProgress() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Find all progress records
    const allProgress = await Progress.find({});
    console.log('Total progress records:', allProgress.length);
    
    allProgress.forEach((record, index) => {
      console.log(`Record ${index + 1}:`, {
        _id: record._id,
        user: record.user,
        courseType: record.courseType,
        completedLessons: record.completedLessons?.length || 0,
        completionPercentage: record.completionPercentage
      });
    });
    
    // Look for records with null courseType
    const badRecords = await Progress.find({ courseType: null });
    console.log('\nRecords with null courseType:', badRecords.length);
    
    if (badRecords.length > 0) {
      console.log('Bad records:');
      badRecords.forEach((record, index) => {
        console.log(`Bad record ${index + 1}:`, {
          _id: record._id,
          user: record.user,
          courseType: record.courseType
        });
      });
      
      // Delete bad records
      const deleteResult = await Progress.deleteMany({ courseType: null });
      console.log(`Deleted ${deleteResult.deletedCount} bad records`);
    }
    
    await mongoose.disconnect();
    console.log('Check completed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkProgress();
