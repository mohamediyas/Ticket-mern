// @desc register new user

const registerUser = (req, res) => {
  console.log(req.body);
  res.send("Register route");
};

const loginUser = (req, res) => {
  res.send("login route");
};

module.exports = {
  registerUser,
  loginUser,
};
