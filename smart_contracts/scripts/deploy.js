const hre = require('hardhat');

async function main() {
    // We get the contract to deploy
    const Twitter = await hre.ethers.getContractFactory('Twitter');
    const twitter = await twitter.deploy('Hello, Hardhat!');

    await twitter.deployed();

    console.log('twitter deployed to:', twitter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
