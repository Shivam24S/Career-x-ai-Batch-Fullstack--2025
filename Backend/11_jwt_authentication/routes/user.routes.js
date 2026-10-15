import express from "express";
import userController from "../controller/user.controller.js";

const router = express.Router();

router.post("/add", userController.add);

router.get("/all", userController.getAllUser);

router.post("/login", userController.login);

export default router;
