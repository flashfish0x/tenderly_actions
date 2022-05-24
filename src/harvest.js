import { ethers } from "ethers";

// Function is later referenced with this name
const harvestOnBalanceIncrease = async (context, event) => {
    const key = await context.secrets.get('TEND_KEY')
    // Log so we can later see what's available in payload
    console.log(event);

    ropstenRpc = 'https://ropsten.infura.io/v3/'

    const defaultProvider = new ethers.providers.JsonRpcProvider(
		ropstenRpc
	);

            // You can also use an ENS name for the contract address
    const daiAddress = "dai.tokens.ethers.eth";

    
    const erc20Abi = [
    
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function balanceOf(address) view returns (uint)",
        "function transfer(address to, uint amount)",

        // An event triggered whenever anyone transfers to someone else
        "event Transfer(address indexed from, address indexed to, uint amount)"
    ];



	



  };
  // Function must be exported
  module.exports = { helloWorldFn };