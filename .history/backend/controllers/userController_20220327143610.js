const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc register new user

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(400);

    throw new Error("Please include all field");
  }

  // find user already exist

  const userExist = await User.findOne({
    email,
  });

  if (userExist) {
    res.status(400);

    throw new Error("user already exist");
  }

  // hash password

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  // create user

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);

    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  registerUser,
  loginUser,
};
