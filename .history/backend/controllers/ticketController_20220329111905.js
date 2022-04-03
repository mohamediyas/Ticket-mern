const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModal");

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getTickets" });
});
