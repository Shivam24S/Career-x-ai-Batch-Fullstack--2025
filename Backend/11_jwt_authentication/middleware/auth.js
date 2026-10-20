import jwt from "jsonwebtoken";
import HttpError from "./HttpError.js"
import User from "../model/user.model.js"

const auth = async(req,res,next)=>{
  try {
    const authHeader = req.header("Authorization");

    console.log("authHeader",authHeader)
    if(!authHeader){
      next(new HttpError("auth header is required",404))
    }
    const token = authHeader.replace("Bearer ","");

    console.log("token",token);

    const decode = jwt.verify(token,process.env.JWT_SECRET)

    console.log("decode",decode);

    if(!decode){
      next(new HttpError("failed to verify token",400))
    }
    const user = await User.findOne({
      _id:decode._id,
      "tokens.token":token,
    })
     if(!user){
      next(new HttpError("unauthorized access",401))
     }
     console.log("user",user)
     req.user=user;
    req.token=token;
     next()
  } catch (error) {
    next(new HttpError(error.message))
  }
}

export default auth;