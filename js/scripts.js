async function mintTicket() {
    if (typeof window.ethereum !== "undefined") {
        const eventName = document.getElementById("eventName").value;
        const ticketPassword = document.getElementById("ticketPassword").value;

        if (!eventName || !ticketPassword) {
            showNotification("Please enter event name and password", "error");
            return;
        }

        try {
            const contract = getEthereumContract();
            const transaction = await contract.mintTicket(eventName, ticketPassword);
            await transaction.wait();

            showNotification("🎟️ Ticket Minted Successfully!", "success");
        } catch (error) {
            console.error(error);
            showNotification("Transaction failed!", "error");
        }
    } else {
        showNotification("Please install MetaMask", "error");
    }
}


async function verifyTicket() {
    const ticketId = document.getElementById("verifyTicketId").value;
    const ticketPassword = document.getElementById("verifyTicketPassword").value;

    if (!ticketId || !ticketPassword) {
        alert("Enter Ticket ID and Password!");
        return;
    }

    const blockchain = await getBlockchain();
    if (!blockchain) return;

    const { contract } = blockchain;

    try {
        const isVerified = await contract.verifyTicket(ticketId, ticketPassword);
        if (isVerified) {
            alert("✅ Ticket Verified!");
        } else {
            alert("❌ Invalid Ticket or Password!");
        }
    } catch (error) {
        console.error("Verification failed:", error);
        alert("❌ Verification Error");
    }
}
