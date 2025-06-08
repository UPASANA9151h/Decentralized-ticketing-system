const express = require("express");
const { mintTicket, verifyTicket } = require("../controllers/ticketController");

const router = express.Router();

router.post("/mint", mintTicket);
router.post("/verify", verifyTicket);

module.exports = router;
