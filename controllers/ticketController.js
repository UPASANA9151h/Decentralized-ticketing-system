const tickets = [];

exports.mintTicket = (req, res) => {
    const { eventName, ticketPassword } = req.body;
    const ticketId = "TICKET" + Math.random().toString(36).substring(2, 10);

    tickets.push({ ticketId, eventName, ticketPassword, verified: false });
    res.json({ message: "Ticket minted successfully!", ticketId });
};

exports.verifyTicket = (req, res) => {
    const { ticketId, ticketPassword } = req.body;
    const ticket = tickets.find(t => t.ticketId === ticketId && t.ticketPassword === ticketPassword);

    if (ticket) {
        ticket.verified = true;
        res.json({ message: "✅ Ticket Verified Successfully!" });
    } else {
        res.status(400).json({ message: "❌ Invalid Ticket or Password!" });
    }
};
