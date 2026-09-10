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
 
    const newStudent = await StudentModel.create(student)

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





export default add