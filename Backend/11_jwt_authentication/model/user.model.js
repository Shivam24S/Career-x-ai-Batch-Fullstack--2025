import mongoose from "mongoose";

import bcrypt from "bcryptjs";

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

userSchema.pre("save", async function () {
  try {
    const user = this;

    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  } catch (error) {
    throw new Error("password hashing failed");
  }
});

userSchema.statics.findByCredential = async function (email, password) {
  try {
    const user = await this.findOne({ email });

    if (!user) {
      throw new Error("unable to login");
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      throw new Error("unable to login");
    }

    return user;
  } catch (error) {
    throw new Error("unable to login");
  }
};

const User = mongoose.model("user-auth", userSchema);

export default User;
