import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/sms");

    console.log("db connected");

    return connect;
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
