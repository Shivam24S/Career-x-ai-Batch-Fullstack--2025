import eventModel from "../model/event.model.js";

import HttpError from "../middleware/HttpError.js";
import fs from "fs";

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

const allEvents = async (req, res, next) => {
  try {
    const eventList = await eventModel.find({});

    if (eventList.length === 0) {
      return next(new HttpError("event not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "event list fetched successfully",
      total: eventList.length,
      eventList,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const eventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);
    if (!event) {
      return next(new HttpError("event not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Event Find Successfully",
      event,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const events = await eventModel.findByIdAndDelete(id);

    if (!events) {
      return next(new HttpError("event not found", 404));
    }

    const filesToDelete = [
      ...events.eventBanners,
      ...events.eventDocuments,
      ...events.eventImages,
      events.eventPoster,
      ...events.eventSpeakers,
    ];

    filesToDelete.forEach((file) => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    });

    res.status(200).json({
      success: true,
      message: "Event deleted Successfully",
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const eventToUpdate = await eventModel.findById(id);

    console.log("event", eventToUpdate);

    if (!eventToUpdate) {
      return next(new HttpError("no event found", 404));
    }

    const updates = Object.keys(req.body);

    const validUpdates = [
      "eventName",
      "eventPlace",
      "eventDate",
      "eventDescription",
      "eventPrice",
    ];

    const isValidUpdates = updates.every((fields) =>
      validUpdates.includes(fields),
    );

    if (!isValidUpdates) {
      return next(new HttpError("only allowed field can be updated", 500));
    }

    if (req.files?.eventImages) {
      eventToUpdate.eventImages.forEach((file) => {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
        }

        eventToUpdate.eventImages =
          req.files?.eventImages?.map((file) => file.path) || [];
      });
    }

    updates.forEach((u) => {
      eventToUpdate[u] = req.body[u];
    });

    await eventToUpdate.save();

    res.status(200).json({
      success: true,
      message: "event data updated successfully",
      eventToUpdate,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default { add, allEvents, eventById, deleteById, updateEvent };
