import express from "express";
import add from "../controller/user.controller.js";

const router = express.Router();

router.post("/add", add);

export default router;
