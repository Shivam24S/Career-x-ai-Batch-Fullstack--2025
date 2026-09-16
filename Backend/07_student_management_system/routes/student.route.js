

import express from "express"
import studentController from "../controller/student.controller.js"



const router = express.Router();


router.post("/add", studentController.add)

router.get("/allStudents", studentController.getAllStudentData)

router.delete("/deleteAll", studentController.deleteAll)

router.get("/:id", studentController.getStudentById)

router.delete("/:id", studentController.deleteStudentById)

// router.patch("/:id",studentController.updateStudent)

router.patch("/:id",studentController.manualUpdate)

export default router