import eventModel from "../model/event.model.js";

import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
  try {
    const { eventName, eventPlace, eventDate, eventDescription, eventPrice } =
      req.body;

    const eventPoster = req.files?.eventPoster?.[0]?.path || null;
    const eventBanners =
      req.files?.eventBanners?.map((file) => file.path) || [];

    const eventSpeakers =
      req.files?.eventSpeakers?.map((file) => file.path) || [];

    const eventImages = req.files?.eventImages?.map((file) => file.path) || [];

    const eventDocuments =
      req.files?.eventDocuments?.map((file) => file.path) || [];

    const newEvent = await eventModel.create({
      eventName,
      eventPlace,
      eventDate,
      eventDescription,
      eventPrice,
      eventPoster,
      eventBanners,
      eventSpeakers,
      eventImages,
      eventDocuments,
    });

    res
      .status(201)
      .json({ success: true, message: "new event created", newEvent });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default { add };
