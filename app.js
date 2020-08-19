const express = require("express");

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello Express JS");
});

app.listen(port, () => {
  console.log("server is running");
});
