const ethers = require("ethers");
const Web3 = require("web3");
const fs = require("fs");
const providerUrl = "https://ropsten.infura.io/v3/YOUR_PROJECT_ID";

const WALLET_NEED_CREATE = 50;
let array = [];

for (let i = 0; i < WALLET_NEED_CREATE; i++) {
  // Generate a new wallet address using ethers.js
  const wallet = ethers.Wallet.createRandom();
  const address = wallet.address;
  const privateKey = wallet.privateKey;

  // Connect to an Ethereum provider using Web3
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

  // Import the wallet to Metamask using Web3
  const newAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.create(0, newAccount.privateKey);
  const selectedAddress = newAccount.address;

  // Log the wallet details and selected address
  console.log(`Wallet address: ${address}`);
  console.log(`Private key: ${privateKey}`);
  console.log(`Selected address: ${selectedAddress}`);

  let objs = {
    address,
    privateKey,
  };
  array.push(objs);
}

fs.writeFileSync("wallets.csv", JSON.stringify(array));
