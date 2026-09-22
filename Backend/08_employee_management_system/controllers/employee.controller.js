import EmployeeModel from "../models/Employee.model.js";

import HttpError from "../middlewares/HttpError.js";

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

    await  newEmployee.save();

    res.status(201).json({
      success: true,
      message: "employee added successfully",
      newEmployee,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default add;
