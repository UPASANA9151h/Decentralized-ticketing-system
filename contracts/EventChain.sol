// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventChain {
    struct Ticket {
        string eventName;
        address owner;
        bool verified;
    }

    mapping(string => Ticket) public tickets;

    function mintTicket(string memory eventName, string memory ticketId) public {
        tickets[ticketId] = Ticket(eventName, msg.sender, false);
    }

    function verifyTicket(string memory ticketId) public view returns (bool) {
        return tickets[ticketId].verified;
    }
}
