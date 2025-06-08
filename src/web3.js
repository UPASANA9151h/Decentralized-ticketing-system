import { ethers } from "ethers";
import contractAbi from "./artifacts/EventChain.json"; // Import the contract ABI

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your local deployed contract address
const PROVIDER_URL = "http://127.0.0.1:8545"; // Hardhat local node

export async function getBlockchain() {
    try {
        const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
        const signer = provider.getSigner(0); // Use first Hardhat account
        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, signer);
        return { provider, signer, contract };
    } catch (error) {
        console.error("Error connecting to blockchain:", error);
        return null;
    }
}
