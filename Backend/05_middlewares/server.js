import express from "express";

import checkAuth from "./middlewares/checkAuth.js";
import HttpError from "./middlewares/HttpError.js";

import cors from "cors"
import helmet from "helmet";

const app = express();

app.get("/", (req, res) => {
  res.json("hello from server");
});

// middlewares types

// 1. application level middlewares

app.use(express.json());

// 2.router level middlewares

const router = express.Router();

app.use(router);

router.get("/about", (req, res) => {
  res.json("this is about page");
});

// 3. routes level middlewares

router.get("/admin", checkAuth, (req, res) => {
  res.json("this is admin routes");
});

// 4. undefined routes handlers

router.use((req, res,next) => {

  next(new HttpError("requested route not found",404))

});

// 5. centralize error handling

app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({
      message: error.message || "internal server error please try again later",
    });
});


// 6. external middleware 

app.use(cors());

app.use(helmet())

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(`server running on port ${port}`);
});
