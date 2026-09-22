import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emp_id: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: ["manager", "employee", "ceo", "HR", "developer", "designer"],
    default: "employee",
    required: true,
  },
  mobileNo: {
    type: Number,
    minLength: 10,
    unique: true,
  },
});

const EmployeeModel = mongoose.model("EMS", employeeSchema);

export default EmployeeModel;
