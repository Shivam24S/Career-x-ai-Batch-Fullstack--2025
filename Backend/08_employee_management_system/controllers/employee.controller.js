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

const deleteAllEmployee = async (req, res, next) => {
  try {
    const deleteAllEmp = await EmployeeModel.deleteMany();

    res
      .status(200)
      .json({ success: true, message: "all employee deleted successfully" });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedEmp = await EmployeeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEmp) {
      return next(new HttpError("failed to update emp detail", 500));
    }
    res.status(200).json({
      success: true,
      message: "emp detail updated successfully",
      updatedEmp,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const updateManually = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await EmployeeModel.findById(id);

    if (!employee) {
      return next(new HttpError("employee not found", 404));
    }

    const updates = Object.keys(req.body);

    const allowedFields = ["name", "mobileNo"];

    const isValidUpdate = updates.every((field) =>
      allowedFields.includes(field),
    );

    if (!isValidUpdate) {
      return next(new HttpError("only allowed field can be updated", 400));
    }

    updates.forEach((u) => {
      employee[u] = req.body[u];
    });

    res.status(200).json({
      success: true,
      message: "employee data updated successfully",
      employee,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default {
  add,
  allEmployeeData,
  getEmpById,
  deleteById,
  deleteAllEmployee,
  // update,
  updateManually,
};
