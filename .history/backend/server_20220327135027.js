const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

// middleware

app.use(express.json());

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("hello");
});

// routes''

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log("Server listen on " + PORT));
