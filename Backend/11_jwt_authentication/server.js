import express from "express";
import HttpError from "./middleware/HttpError.js";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.json("hello from server");
});

app.use((req, res, next) => {
  return next(new HttpError("Request Routes not Found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statuscode || 500)
    .json({ message: error.message || "internal server Error" });
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
        return console.log(err);
      }

      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();
