const { ethers } = require("ethers");

// Function is later referenced with this name
const harvestOnBalanceIncreaseFn = async (context, event) => {
    const key = await context.secrets.get('TEND_KEY')
    // Log so we can later see what's available in payload
    console.log(event);

    ropstenRpc = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

    const provider = new ethers.providers.JsonRpcProvider(
		  ropstenRpc, 3
	  );
    console.log("provide: ", provider)

    const  network = await provider.detectNetwork()
    console.log(network)

    // Create a wallet instance
    let wallet = new ethers.Wallet(key, provider)

    let tx = {
        to: wallet.address,
        // Convert currency unit from ether to wei
        value: 0,
        maxFeePerGas: 1000 *1e9,
        maxPriorityFeePerGas: 1*1e9
    }

    console.log(tx);
    // Send a transaction
    const res = await wallet.sendTransaction(tx);
    console.log( res);


  };
  // Function must be exported
  module.exports = { harvestOnBalanceIncreaseFn };