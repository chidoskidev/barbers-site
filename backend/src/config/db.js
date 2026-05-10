import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to Database", error);
    process.exit(1);
  }
};
