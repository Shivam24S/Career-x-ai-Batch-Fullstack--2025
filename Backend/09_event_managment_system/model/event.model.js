import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventDescription: {
    true: String,
  },
  eventPlace: {
    type: String,
    required: true,
  },
  eventPrice: {
    type: Number,
    required: true,
  },
  eventPoster: {
    type: String,
    required: true,
  },
  eventBanners: {
    type: [String],
  },
  eventSpeakers: {
    type: [String],
  },
  eventImages: {
    type: [String],
  },
  eventDocuments: {
    type: [String],
  },
});

const eventModel = mongoose.model("eventModel", eventSchema);

export default eventModel;
