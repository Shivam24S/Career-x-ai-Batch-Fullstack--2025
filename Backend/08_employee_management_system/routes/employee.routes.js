import express from "express";
import EmployeeController from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/add", EmployeeController.add);

router.get("/allEmployeeData", EmployeeController.allEmployeeData);

router.get("/:id", EmployeeController.getEmpById);

router.delete("/:id", EmployeeController.deleteById);

export default router;
