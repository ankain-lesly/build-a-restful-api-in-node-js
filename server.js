/**
 * Node JS Server
 * Rest API
 */

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const errorHandler = require("./middleware/errorHandler.js");
const dbConnect = require("./config/dbConnect.js");

// Custom Routes
const mainRoute = require("./routes/mainRoute");
const contactRouter = require("./routes/contactRoutes.js");
const userRouter = require("./routes/userRoutes.js");

const morgan = require("morgan");
dbConnect();

app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);

// Route Consumer
app.use("/", mainRoute);
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Serving.. PORT: ${port}`);
});
