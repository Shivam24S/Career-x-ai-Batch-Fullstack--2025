import HttpError from "./HttpError.js";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return next(new HttpError("auth header is required", 400));
    }

    const token = authHeader.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decode._id,
      "tokens.token": token,
    });

    if (!user) {
      return next(new HttpError("unauthorize access", 401));
    }

    req.user = user;

    req.token = token;

    next();
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default auth;
