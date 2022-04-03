const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, () => console.log("Server listen on " + PORT));
