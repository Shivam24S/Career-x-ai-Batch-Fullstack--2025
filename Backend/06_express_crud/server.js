import express from "express";
import HttpError from "./middleware/HttpError.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello from server");
});

const taskList = [
  {
    id: 1,
    task: "learn",
    description: "you have to learn daily new things",
  },
  {
    id: 2,
    task: "practice",
    description: "you have to do practice daily for",
  },
];

app.get("/taskList", (req, res, next) => {
  try {
    if (taskList.length === 0) {
      return res.json({ message: "no task data found" });
    }

    res.json({
      success: true,
      message: "task data fetched successfully",
      taskList,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
});

app.get("/taskList/:id", (req, res, next) => {
  try {
    const { id } = req.params;

    const task = taskList.find((t) => t.id === Number(id));

    if (task === undefined) {
      return res.json({ message: "no task data found" });
    }

    res
      .status(200)
      .json({ success: true, message: "task found with this id", task });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
});

app.post("/task/add", (req, res, next) => {
  try {
    const { task, description } = req.body;

    console.log("task", task);
    console.log("description", description);

    if (task === undefined && description === undefined) {
      return next(new HttpError("task and description data is required", 400));
    }

    const newTask = {
      id: new Date().getTime(),
      task: task,
      description: description,
    };

    taskList.push(newTask);

    res.status(201).json({
      success: true,
      message: "task data added successfully",
      newTask,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
});

app.delete("/task/:id", (req, res, next) => {
  try {
    const { id } = req.params;

    const index = taskList.findIndex((t) => t.id === Number(id));

    if (index === -1) {
      return next(new HttpError("task not found with this id", 404));
    }

    taskList.splice(index, 1);

    return res
      .status(200)
      .json({ success: true, message: "task deleted successfully", taskList });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
});

app.patch("/task/:id", (req, res, next) => {
  try {
    const { id } = req.params;

    const updateTask = taskList.find((t) => t.id === Number(id));

    if (updateTask === undefined) {
      return next(new HttpError("task not found with this id", 404));
    }

    const { task, description } = req.body;

    if (task) {
      updateTask.task = task;
    }

    if (description) {
      updateTask.description = description;
    }

    if (task === undefined && description === undefined) {
      return next(
        new HttpError(
          "for updating task data task or description is required",
          400,
        ),
      );
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "task data updated successfully",
        updateTask,
      });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
});

// undefined routes
app.use((req, res, next) => {
  next(new HttpError("requested route not found", 404));
});

// centralize error handling
app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`server running on port ${port}`);
});
