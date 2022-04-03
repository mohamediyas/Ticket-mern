const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },

    text: {
      type: String,
      required: [true, "Please add a text of issue "],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: [true, "Please add a text of issue "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
