import EmployeeModel from "../models/Employee.model.js";

import HttpError from "../middlewares/HttpError.js";
import mongoose from "mongoose";

const add = async (req, res, next) => {
  try {
    const { name, email, emp_id, designation, mobileNo } = req.body;

    const newEmployee = new EmployeeModel({
      name,
      email,
      emp_id,
      designation,
      mobileNo,
    });

    await newEmployee.save();

    res.status(201).json({
      success: true,
      message: "employee added successfully",
      newEmployee,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const allEmployeeData = async (req, res, next) => {
  try {
    const employeeList = await EmployeeModel.find({});

    if (employeeList.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "no employee data found" });
    }

    res.status(200).json({
      success: true,
      message: "employee list fetched successfully",
      total: employeeList.length,
      employeeList,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const getEmpById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const validId = mongoose.isValidObjectId(id);

    if (!validId) {
      return next(new HttpError("employee with this id not found", 404));
    }

    const employee = await EmployeeModel.findById(id);

    res.status(200).json({ success: true, message: "emp found", employee });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await EmployeeModel.findByIdAndDelete(id);

    if (!employee) {
      return next(new HttpError("failed to delete employee", 500));
    }

    res
      .status(200)
      .json({ success: true, message: "employee delete successfully" });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default { add, allEmployeeData, getEmpById, deleteById };
