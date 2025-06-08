import { ethers } from "ethers";
import ContractABI from "../artifacts/contracts/EventChain.sol/EventChain.json"; // Update the path if needed

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address

export const getContract = async () => {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI.abi, signer);

    return contract;
};
