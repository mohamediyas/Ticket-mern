const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const connectDb = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 8000;

// connect database

connectDb();

const app = express();

// middleware

app.use(express.json());

// routes''

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// serve frontend

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.send("hello");
  });
}

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log("Server listen on " + PORT));
