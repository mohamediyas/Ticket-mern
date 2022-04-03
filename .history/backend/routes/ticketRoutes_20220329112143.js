const express = require("express");
const { route } = require("../controllers/ticketController");
const { getTickets, createTicket } = require("../controllers/ticketController");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

module.exports = router;
