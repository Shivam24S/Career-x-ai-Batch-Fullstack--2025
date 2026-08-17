import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let studentList = [
  { id: 1, name: "alice" },
  { id: 2, name: "dexter" },
  {
    id: 3,
    name: "john",
  },
  {
    id: 4,
    name: "micheal",
  },
];

app.get("/", (req, res) => {
  res.render("index", { studentList });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { name } = req.body;

  console.log("name", name);

  const newStudent = {
    id: new Date().getTime(),
    name,
  };

  studentList.push(newStudent);

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  const student = studentList.find((s) => s.id === Number(id));

  if (!student) {
    res.json("student not found");
  }

  res.render("edit", { student });
});

app.post("/edit/:id", (req, res) => {
  const { id } = req.params;

  console.log("id",id)

  const student = studentList.findIndex((s) => s.id === Number(id));

  console.log("studentIndex",student)

  const { name } = req.body;

  console.log("form data",name)

  studentList[student].name = name;

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const { id } = req.params;

  studentList = studentList.filter((s) => s.id !== Number(id));

  res.redirect("/");
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log("error", error.message);
  }

  console.log(`server running on port ${port}`);
});
