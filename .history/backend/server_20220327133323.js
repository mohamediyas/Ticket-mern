const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// routes''

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log("Server listen on " + PORT));
