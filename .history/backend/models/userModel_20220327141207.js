const mongoose = require("mongoose");

const userSChema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name "],
    },
    email: {
      type: String,
      required: [true, "Please add a Email "],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password "],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
