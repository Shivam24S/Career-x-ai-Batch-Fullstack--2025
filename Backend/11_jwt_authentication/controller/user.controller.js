import User from "../model/User.model.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({ success: true, message: "user added", newUser });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return next(new HttpError("no user list found", 404));
    }

    res.status(200).json({
      success: true,
      message: "user list fetched",
      total: users.length,
      users,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findByCredential(email, password);

    if (!user) {
      return next(new HttpError("failed to login", 400));
    }

    res
      .status(200)
      .json({ success: true, message: "user login successfully", user });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { add, getAllUser, login };
