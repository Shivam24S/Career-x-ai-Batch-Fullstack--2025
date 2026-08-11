import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log("error", error.message);
  }

  console.log(`server running on port ${port}`);
});
