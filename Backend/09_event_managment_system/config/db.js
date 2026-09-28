import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log("env path", process.env.MONGO_URI);

    console.log("db connected");

    return connect;
  } catch (error) {
    throw new Error(error);
  }
}

export default connectDB;
