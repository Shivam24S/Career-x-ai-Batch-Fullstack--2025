import express from "express";
import userController from "../controller/user.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add", userController.add);

router.get("/all", auth, userController.getAllUser);

router.post("/login", userController.login);

router.get("/authLogin",auth,userController.authLogin);

router.delete("/delete",auth,userController.deleteUser)
export default router;
