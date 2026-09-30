import express from "express";
import dotenv from "dotenv";

import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";

import eventRouter from "./router/event.routes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/event", eventRouter);

app.get("/", (req, res) => {
  res.status(200).json("hello from server");
});

app.use((req, res, next) => {
  return next(new HttpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error.message);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = process.env.PORT;

async function startServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      throw new Error("failed to connect db");
    }

    app.listen(port, (error) => {
      if (error) {
        console.log(error.message);
      }

      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();
