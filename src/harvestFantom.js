const { ethers } = require("ethers");

// Function is later referenced with this name
const harvestFantonFn = async (context, event) => {
    const key = await context.secrets.get('TEND_KEY')
    // Log so we can later see what's available in payload
    //console.log(event);

    console.log("gasPriceEvent: ", event["gasPrice"])
    let gasPriceEvent = ethers.BigNumber.from(event["gasPrice"]) //+ (50*1e9)
    console.log("gasPriceEvent: ", gasPriceEvent.toNumber())

    gasPriceEvent = gasPriceEvent.toNumber() + (50*1e9)
    console.log("gasPriceEvent: ", gasPriceEvent)

    fantomRpc = 'https://rpc.ftm.tools'

    const provider = new ethers.providers.JsonRpcProvider(
        fantomRpc, 250
	  );
    //console.log("provide: ", provider)

    const  network = await provider.detectNetwork()
    //console.log(network)

    const stratAbi = [
        "function harvest()"
      ];

    // Create a wallet instance
    let wallet = new ethers.Wallet(key, provider)

    const stratAddress = '0xd025b85db175EF1b175Af223BD37f330dB277786'
    const stratContract = new ethers.Contract(stratAddress, stratAbi, wallet);


    // let tx = {
    //     to: wallet.address,
    //     // Convert currency unit from ether to wei
    //     value: 0,
    //     maxFeePerGas: 1000 *1e9,
    //     maxPriorityFeePerGas: 1*1e9
    // }

    // Send a transaction
    const res = await stratContract.harvest({
        gasLimit: 5_000_000, gasPrice: gasPriceEvent
    });
    console.log( res);


  };
  // Function must be exported
  module.exports = { harvestFantonFn };