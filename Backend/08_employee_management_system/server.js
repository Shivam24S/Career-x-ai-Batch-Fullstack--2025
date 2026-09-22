import express from "express";
import HttpError from "./middlewares/HttpError.js";

import dotenv from "dotenv";
import connectDB from "./config/db.js";

import employeeRouter from "./routes/employee.routes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/employee", employeeRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
  return next(new HttpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = 5000;

async function startServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("failed to connect db");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();
