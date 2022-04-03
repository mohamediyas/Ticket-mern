const express = require("express");
const {
  route,
  getTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");
const { getTickets, createTicket } = require("../controllers/ticketController");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
