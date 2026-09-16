import StudentModel from "../model/student.model.js";

import httpError from "../middlewares/HttpError.js";

// manual save
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

    const newStudent = new StudentModel(student);

    await newStudent.save();

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

// automatic save

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

//     const newStudent = await StudentModel.create(student);

//     if (!newStudent) {
//     return  next(new httpError("failed to add student", 400));
//     }

//     res
//       .status(201)
//       .json({ success: true, message: "student added", newStudent });
//   } catch (error) {
//     next(new httpError(error.message, 500));
//   }
// };

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

    if (!student) {
      return next(new httpError("no student data found with this id", 404));
    }

    res
      .status(200)
      .json({ success: true, message: "student found with this id", student });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const deleteStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedStudent = await StudentModel.findByIdAndDelete(id);

    console.log("deleted", deletedStudent);

    if (!deletedStudent) {
      return next(new httpError("failed to delete student with this id", 400));
    }

    res.status(200).json({
      success: true,
      message: "student with this id deleted successfully",
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const deleteAll = async (req, res, next) => {
  try {
    const deleteList = await StudentModel.deleteMany();

    if (deleteList.deletedCount === 0) {
      return next(new httpError("failed to delete all data", 500));
    }

    res
      .status(200)
      .json({ success: true, message: "student list deleted successfully" });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

// const updateStudent = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const updatedStudent = await StudentModel.findByIdAndUpdate(id,req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedStudent) {
//       return next(
//         new httpError("failed to update student data with this id", 500),
//       );
//     }

//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "student data updated successfully",
//         updatedStudent,
//       });
//   } catch (error) {
//     next(new httpError(error.message, 500));
//   }
// };

const manualUpdate = async (req, res, next) => {
  try {

    const {id} = req.params;

    const studentUpdate = await StudentModel.findById(id);

    if(!studentUpdate){
      return next(new httpError("student not found with this id",404))
    }

    const updates = Object.keys(req.body);

    const allowedField = ["name", "email"];

    const isValidUpdates = updates.every((field) =>
      allowedField.includes(field),
    );

    if (!isValidUpdates) {
      return next(new httpError("only allowed field can be update", 400));
    }

    updates.forEach((u) => {
      studentUpdate[u] = req.body[u];
    });

   await studentUpdate.save()

    res
      .status(200)
      .json({ success: true, message: "student data updated successfully" ,studentUpdate});
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

export default {
  add,
  getAllStudentData,
  getStudentById,
  deleteStudentById,
  deleteAll,
  // updateStudent,
  manualUpdate,
};
