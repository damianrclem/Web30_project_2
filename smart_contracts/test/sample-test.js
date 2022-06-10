const { expect } = require('chai');
const { ethers } = require('hardhat');
const { getContractAddress } = require('@ethersproject/address');

describe('Greeter', function () {
    it("Should return the new greeting once it's changed", async function () {
        const [owner] = await ethers.getSigners();
        const transactionCount = await owner.getTransactionCount();

        const futureAddress = getContractAddress({
            from: owner.address,
            nonce: transactionCount,
        });
        console.log(futureAddress);
    });
});
