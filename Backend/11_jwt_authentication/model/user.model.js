import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: (password) => {
      if (password === "password") {
        throw new Error("password word can't save as password");
      }
    },
  },
});

const User = mongoose.model("user-auth", userSchema);

export default User;
