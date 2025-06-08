/*const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // Ensure backend runs on port 5000

app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Middleware to handle JSON data

// Test API Route
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Default Route (Fixes 404 on `/`)
app.get("/", (req, res) => {
    res.send("Welcome to the EventChain Backend!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
*/
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Enable CORS for all origins
app.use(cors({ origin: "*" }));
app.use(express.json()); // Middleware to handle JSON data

// Test API Route
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Default Route (Optional)
app.get("/", (req, res) => {
    res.send("Welcome to the EventChain Backend!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
