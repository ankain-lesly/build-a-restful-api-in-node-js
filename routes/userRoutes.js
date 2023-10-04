const express = require("express");
const userRouter = express.Router();
const validateToken = require("../middleware/tokenHandler.js");

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController.js");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current", validateToken, currentUser);

module.exports = userRouter;
