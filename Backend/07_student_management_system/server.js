// third party modules
import express from "express";


// middleware
import httpError from "./middlewares/HttpError.js";

// locally 
import connectDB from "./config/db.js";


// routes
import studentRoutes from "./routes/student.route.js"
 

const app = express();

app.use(express.json())

app.use("/student",studentRoutes)

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
  return next(new httpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(new httpError(error));
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
      throw new Error("failed to connect db");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message)
  }
}


startServer()