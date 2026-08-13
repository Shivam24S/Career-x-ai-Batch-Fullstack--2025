import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server another ");
});

app.get("/about", (req, res) => {
  res.send({ page: "this is about page " });
});

const personList = [
  {
    name: "alice",
    age: 20,
  },
  {
    name: "dexter",
    age: 30,
  },
];

app.get("/json", (req, res) => {
  res.json({ message: "this is json format" });
});

app.get("/personList", (req, res) => {
  res.json(personList);
});

// middleware

app.use((req, res, next) => {
  return res.json({ message: "requested route not found" });
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log("error", err.message);
  }

  console.log(`server running on port ${port}`);
});
