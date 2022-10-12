// libraries
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD App, Works well!");
});

app.get("/status", (req, res) => {
  res.status(200);
  res.send("Okay");
});

app.get("/hello", (req, res) => {
  res.status(200);
  res.send("Hi, there!");
});

app.listen(PORT, () =>
  console.log(`Server is running on Port: ${PORT}`.cyan.underline),
);
