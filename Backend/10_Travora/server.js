import express from "express";

import dotenv from "dotenv";

import HttpError from "./middlewares/HttpError.js";

import connectDB from "./config/db.js";
import packageRouter from "./routes/packageRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use("/travel",packageRouter)

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello from server");
});

app.use((req, res, next) => {
  return next(new HttpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  return res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      throw new Error("failed to connect db");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
