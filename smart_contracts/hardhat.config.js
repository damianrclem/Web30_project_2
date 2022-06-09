require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.2',
    networks: {
        goerli: {
            url: 'https://eth-goerli.alchemyapi.io/v2/KPn-2FwYK_NwhUv05HjXZ__oERWrmjE4',
            accounts: ['8d5c5a6b845f576f5a69577771ad03a78137363ef0acfee24703639ab1db26cb'],
        },
    },
};
