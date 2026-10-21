import User from "../model/user.model.js";
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

    const token = await user.generateAuthToken();

    res
      .status(200)
      .json({ success: true, message: "user login successfully", user, token });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};
const authLogin = async(req,res,next)=>{
  try {
    const user = req.user;
    res.status(200).json({success:true,message:"auth login successfully",user})

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
}

const deleteUser = async(req,res,next)=>
{
  try {
    const user = req.user;

    const userDelete = await User.deleteOne(user);

    res.status(200).json({success:true,message:"user deleted successfully"})
    
  } catch (error) {
     next(new HttpError(error.message, 500));
  }
}

const updateUser = async (req,res,next) => {
  try {
   const user = req.user;
   const updates = Object.keys(req.body);
   const allowedField = ["name","password"]

   console.log("updates",updates)
   console.log("allowField",allowedField)
   
   
  const isValidUpdate = updates.every((field) => 
     allowedField.includes(field)
  )
   
   console.log("is Valid",isValidUpdate)


   if(!isValidUpdate)
   {
    return next(new HttpError("Only Allowed Field Can Be Update",400))
   }

   updates.forEach((u) => {
    user[u] = req.body[u]
   })

   await user.save()
   
   res.status(200).json({success:true,message:"Updated Successfully",user})

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
}

const logOut = async (req,res,next) =>{
  try {

    req.user.tokens = req.user.tokens.filter((t)=> t.tokens != req.token)

    await req.user.save()

    res.status(200).json({success:true,message:"logOut Successfully"})

  } catch (error) {
    next(new HttpError(error.message, 500));
    
  }
}

const logOutAll = async (req,res,next)=>{
  try {

    req.user.tokens = [];

    await req.user.save()

    res.status(200).json({success:true,message:"logOut From All Device Successfully"})
    
  } catch (error) {
    next(new HttpError(error.message,500));
    
  }
}

export default { add, getAllUser, login,authLogin,deleteUser,updateUser, logOut, logOutAll};
