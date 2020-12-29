const Web3 = require('web3');

const SendEtherToContract = require('../build/contracts/SendEtherToContract.json')



const init = async () => {
    const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');
    const contract = new web3.eth.Contract(
        SendEtherToContract.abi,
        SendEtherToContract.networks['5777'].address
    )


    // set the transaction confirmations blocks
    web3.eth.transactionConfirmationBlocks = 1;

    //check data before transaction
    console.log(await contract.methods.functionCalled().call())

    //access accounts
    const addresses = await web3.eth.getAccounts();

    //creating a transaction with send instead of call. 
    await contract.methods.sendEther().send({
        from: addresses[0],
        value: web3.utils.toWei('10', 'ether'),
    })

    //check data after transaction
    console.log(await contract.methods.functionCalled().call())

    //creating a transaction to the fallback function 
    await web3.eth.sendTransaction({
        from: addresses[0],
        to: SendEtherToContract.networks['5777'].address,
        value: web3.utils.toWei('10', 'ether'),
    })

    // check if fallback function was used
    console.log(await contract.methods.functionCalled().call())

};

init();


