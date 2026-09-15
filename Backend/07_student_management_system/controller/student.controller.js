import StudentModel from "../model/student.model.js";

import httpError from "../middlewares/HttpError.js";

// manual save
// const add = async (req, res, next) => {
//   try {
//     const { name, email, grId, course, isActive } = req.body;

//     const student = {
//       name,
//       email,
//       grId,
//       course,
//       isActive,
//     };

//     const newStudent = new StudentModel(student);

//     await newStudent.save();

//     if (!newStudent) {
//       next(new httpError("failed to add student", 400));
//     }

//     res
//       .status(201)
//       .json({ success: true, message: "student added", newStudent });
//   } catch (error) {
//     next(new httpError(error.message, 500));
//   }
// };

// automatic save

const add = async (req, res, next) => {
  try {
    const { name, email, grId, course, isActive } = req.body;

    const student = {
      name,
      email,
      grId,
      course,
      isActive,
    };

    const newStudent = await StudentModel.create(student);

    if (!newStudent) {
      next(new httpError("failed to add student", 400));
    }

    res
      .status(201)
      .json({ success: true, message: "student added", newStudent });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const getAllStudentData = async (req, res, next) => {
  try {
    const students = await StudentModel.find({});

    if (students.length === 0) {
      return res.status(200).json({
        success: true,
        message: "no student data found please add...",
      });
    }

    res.status(200).json({
      success: true,
      message: "studentList fetched successfully",
      students,
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await StudentModel.findById(id);

    if (student===null) {
      next(new httpError("no student data found with this id",404));
    }

    res
      .status(200)
      .json({ success: true, message: "student found with this id", student });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const deleteStudentById = async (req,res,next) =>{
  try {

    const {id} = req.params;

    const deletedStudent = await StudentModel.findByIdAndDelete(id)

    console.log("deleted",deletedStudent)

    if(!deleteStudentById){
      return next(new httpError("failed to delete student with this id",400));
    }
    
    res.status(200).json({success:true,message:"student with this id deleted successfully"})

  } catch (error) {
      next(new httpError(error.message, 500));
  }
}

const deleteAll = async (req,res,next) =>{

  try {

    const deleteList = await StudentModel.deleteMany();

    res.status(200).json({success:true,message:"student list deleted successfully"})
    
  } catch (error) {
     next(new httpError(error.message, 500));
  }

}

export default { add, getAllStudentData, getStudentById, deleteStudentById,deleteAll};
