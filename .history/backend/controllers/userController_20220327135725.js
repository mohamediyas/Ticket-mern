const asyncHandler = require("express-async-handler");

// @desc register new user

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(400);

    throw new Error("Please include all field");
  }

  res.send("Register route");
});

const loginUser = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  registerUser,
  loginUser,
};
