/*import React, { useState, useEffect } from "react";
import { getContract } from "./utils/interact";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            const contract = await getContract();
            if (contract) {
                try {
                    const data = await contract.getSomeData(); // Replace with actual contract function
                    setMessage(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>EventChain DApp</h1>
            <p>Contract Message: {message}</p>
        </div>
    );
}

export default App;*/
/*import React, { useState, useEffect } from "react";
import { getContract } from "./utils/interact";

function App() {
    const [message, setMessage] = useState(""); // Stores Smart Contract Data
    const [backendMessage, setBackendMessage] = useState(""); // Stores Backend Data

    useEffect(() => {
        // Fetch data from backend
        async function fetchBackendData() {
            try {
                const response = await fetch("http://localhost:5000/api/test");
                const data = await response.json();
                console.log("Backend Response:", data);
                setBackendMessage(data.message);
            } catch (error) {
                console.error("Error fetching backend data:", error);
            }
        }

        // Fetch data from Smart Contract
        async function fetchContractData() {
            const contract = await getContract();
            if (contract) {
                try {
                    const data = await contract.getSomeData(); // Replace with actual contract function
                    console.log("Smart Contract Data:", data);
                    setMessage(data);
                } catch (error) {
                    console.error("Error fetching smart contract data:", error);
                }
            }
        }

        fetchBackendData(); 
        fetchContractData(); 
    }, []);

    return (
        <div>
            <h1>EventChain DApp</h1>
            <p><strong>Contract Message:</strong> {message || "Fetching from contract..."}</p>
            <p><strong>Backend Message:</strong> {backendMessage || "Fetching from backend..."}</p>
        </div>
    );
}

export default App;
*/
/*import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:5000/api/test")
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setMessage("Failed to load data.");
            });
    }, []);

    return (
        <div>
            <h1>EventChain DApp</h1>
            <p>Backend Response: {message}</p>
        </div>
    );
}

export default App;
*/
/*import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:5000/api/test")  // Ensure this points to port 5000
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setMessage(data.message))
            .catch(error => {
                console.error("Error fetching data:", error);
                setMessage("Failed to load data.");
            });
    }, []);

    return (
        <div>
            <h1>EventChain DApp</h1>
            <p>Backend Response: {message}</p>
        </div>
    );
}

export default App;*/
import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    // Function to fetch data from backend
    async function fetchData() {
        try {
            const response = await fetch("http://localhost:5000/api/test"); // Ensure backend is on port 5000
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched data:", data);
            setMessage(data.message); // Update state with fetched message
        } catch (error) {
            console.error("Error fetching data:", error);
            setMessage("Failed to load data.");
        }
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>EventChain DApp</h1>
            <p>Backend Response: {message}</p>
            <button onClick={fetchData}>Fetch Data</button> {/* Button to manually fetch data */}
        </div>
    );
}

export default App;


