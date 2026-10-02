import express from "express";
import eventController from "../controller/event.controller.js";
import uploads from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/add",
  uploads.fields([
    {
      name: "eventPoster",
      maxCount: 1,
    },
    {
      name: "eventBanners",
      maxCount: 3,
    },
    {
      name: "eventSpeakers",
      maxCount: 5,
    },
    {
      name: "eventImages",
      maxCount: 10,
    },
    {
      name: "eventDocuments",
      maxCount: 3,
    },
  ]),
  eventController.add,
);

router.get("/allEvents", eventController.allEvents);
router.get("/eventById/:id", eventController.eventById);
router.delete("/delete/:id", eventController.deleteById);

router.patch(
  "/update/:id",
  uploads.fields([
    {
      name: "eventImages",
      maxCount: 10,
    },
  ]),
  eventController.updateEvent,
);

export default router;
