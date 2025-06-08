require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0", // Match this with your Solidity version
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {}, // Internal Hardhat blockchain
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  paths: {
    sources: "./contracts", // Solidity files location
    tests: "./test", // Test files location
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
