/**
 * UserController
 * Handling Users & DB manipulation
 *
 */

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc : Create a new user
//@routes : POST /api/users/register
//@access : public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory...");
  }
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    res.status(400);
    throw new Error("User email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const user = await User.create({ username, email, password: hashedPassword });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Error registring user...");
  }
});
//@desc : Login user
//@routes : POST /api/users/login
//@access : public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory...");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("User info not valid!");
  }
});
//@desc : Get user info
//@routes : POST /api/users/current
//@access : private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
