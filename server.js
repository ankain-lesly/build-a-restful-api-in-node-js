/**
 * Node JS Server
 * Rest API
 */

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to home page" });
});

app.listen(port, () => {
  console.log(`Serving.. PORT: ${port}`);
});
