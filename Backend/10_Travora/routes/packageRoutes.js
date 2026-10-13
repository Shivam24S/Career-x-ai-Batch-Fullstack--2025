import travelController from "../controller/travelController.js";
import express from "express";
import uploads from "../middlewares/upload.js";

const router = express.Router();

router.post("/add", uploads.single("package_image"), travelController.add);
router.get("/getAll", travelController.getAll);
router.get("/getById/:id", travelController.getById);
router.delete("/packageDelete/:id", travelController.DeletePackage);
router.patch(
  "/updatePackageDetails/:id",
  uploads.single("package_image"),
  travelController.updatePackage,
);

export default router;
