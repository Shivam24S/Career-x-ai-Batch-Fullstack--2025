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

export default add;
