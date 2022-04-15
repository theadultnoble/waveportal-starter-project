require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/jeghNA8_uAt0Q4DV1DQT85SJUYYL_I79",
      accounts: ["4063a4e9632f0b804a85d37e88e82f22f9264ae4b504606ec09e62a3fb4c595d"],
    },
  },
};
