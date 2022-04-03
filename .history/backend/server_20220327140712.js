const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const connectDb = require("./config/db");

const PORT = process.env.PORT || 8000;

// connect database

connectDb();

const app = express();

// middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// routes''

app.use("/api/users", require("./routes/userRoutes"));

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log("Server listen on " + PORT));
