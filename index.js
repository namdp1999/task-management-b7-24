const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

const databse = require("./config/database");
databse.connect();

const Task = require("./models/task.model");

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({
    deleted: false
  });

  res.json(tasks);
});

app.get("/tasks/detail/:id", async (req, res) => {
  const id = req.params.id;

  const task = await Task.findOne({
    _id: id,
    deleted: false
  });

  res.json(task);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});