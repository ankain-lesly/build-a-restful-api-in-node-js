/**
 * Node JS Server
 * Rest API
 */

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Custom Routes
const mainRoute = require("./routes/mainRoute");

const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

// Route Consumer
app.use("/", mainRoute);

app.listen(port, () => {
  console.log(`Serving.. PORT: ${port}`);
});
