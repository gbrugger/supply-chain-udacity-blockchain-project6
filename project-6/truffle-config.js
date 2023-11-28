require("dotenv").config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = PROJECT_ID;

const mnemonic = MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://sepolia.infura.io/v3/${PROJECT_ID}`
        ),
      network_id: 11155111, // Sepolia's id
      confirmations: 2, // # of confirmations to wait between deployments. (default: 0)
      // timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
      // gas: 4500000, // rinkeby has a lower block limit than mainnet
      // gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    },
  },
};
