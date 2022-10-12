// libraries
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;

const app = express();

// routes
app.use("/", require("./routes/goalRoutes"));
app.use("/status", require("./routes/userRoutes"));
app.use("/hello", require("./routes/userRoutes"));

app.listen(PORT, () =>
  console.log(`Server is running on Port: ${PORT}`.cyan.underline),
);
