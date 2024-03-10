const mongoose = require("mongoose");

const DATABASE_URI = process.env.DATABASE_URI;

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(DATABASE_URI);
    console.log("Connected to database");
  } catch (error) {
    // Handle errors more gracefully
    console.error("Database connection error:", error);
    throw error;
  }
};

module.exports = { connectDatabase };
