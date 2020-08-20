const express = require("express");

const port = 5000;

// const app = express();

let todos = [{ id: i, tasks: "call me", date: "20/08/2020", completed: false }];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(todos);
});

app.get("/:id", (req, res) => {
  id = req.params.id;

  todos.forEach((todo) => {
    if (todo.id == id) {
      return res.status(200).json(todo);
    }
  });
  res.status(404).json({ error: "todo not found" });
  // res.send(id);
});
app.delete("/:id", (req, res) => {
  id = req.params.id;
  const newTodos = [];

  todos.forEach((todo) => {
    if (todo.id != id) {
      newTodos, push(todo);
    }
  });

  todos = newTodos;

  res, status(204).send;
});

// app.get("/", (req, res) => {
//   res.send("hello Express JS");
// });

app.post("/", (req, res) => {
  todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);

  res.status(201).send();
});

app.listen(port, () => {
  console.log("server is running");
});
