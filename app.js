window.ethereum.enable();

var provider = new ethers.providers.Web3Provider(
    web3.currentProvider,
    "ropsten"
  );