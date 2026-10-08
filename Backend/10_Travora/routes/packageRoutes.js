
import travelController from "../controller/travelController.js";
import express from "express";
import uploads from "../middlewares/upload.js";

const router = express.Router();

router.post("/add",uploads.single("package_image"),travelController.add);

export default router;