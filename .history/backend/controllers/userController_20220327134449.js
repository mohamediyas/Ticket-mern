// @desc register new user

const registerUser = (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(400);

    throw new Error("Please include all field");
  }

  res.send("Register route");
};

const loginUser = (req, res) => {
  res.send("login route");
};

module.exports = {
  registerUser,
  loginUser,
};
