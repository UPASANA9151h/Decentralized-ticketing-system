async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const EventChain = await ethers.getContractFactory("EventChain");
    const eventChain = await EventChain.deploy();  
    await eventChain.waitForDeployment();  // ✅ Correct function

    console.log("Contract deployed at:", await eventChain.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
