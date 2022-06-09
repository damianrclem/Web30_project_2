const hre = require('hardhat');

const main = async () => {
    // We get the contract to deploy
    const profileImageMinterFactory = await hre.ethers.getContractFactory('ProfileImageNfts');
    const profileImageContract = await profileImageMinterFactory.deploy();

    await profileImageContract.deployed();

    console.log('Profile image minter deployed to:', profileImageContract.address);
};

async () => {
    try {
        await main();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
