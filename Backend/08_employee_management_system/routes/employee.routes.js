import express from "express";
import EmployeeController from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/add", EmployeeController.add);

router.get("/allEmployeeData", EmployeeController.allEmployeeData);

router.delete("/deleteAll", EmployeeController.deleteAllEmployee);

router.get("/:id", EmployeeController.getEmpById);

router.delete("/:id", EmployeeController.deleteById);

// router.patch("/:id", EmployeeController.update);

router.patch("/:id", EmployeeController.updateManually);

export default router;
