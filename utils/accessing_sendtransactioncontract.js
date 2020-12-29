const Web3 = require('web3');

const SendTransactionContract = require('../build/contracts/SendTransactionContract.json')



const init = async () => {
    const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');
    const contract = new web3.eth.Contract(
        SendTransactionContract.abi,
        SendTransactionContract.networks['5777'].address
    )


    // set the transaction confirmations blocks
    web3.eth.transactionConfirmationBlocks = 2;

    //accessing data from the blockchain
    data = await contract.methods.getData().call()
    console.log('data is:', data)

    //changing data from the blockchain
    //getting the unlocked accounts from the node first

    const addresses = await web3.eth.getAccounts();
    //When send a transaction is received by the blockchain a receipt is returned.
    //it serves as a confirmation that the reansaction will be processed by the blochchain
    //in the future
    /* const receipt = await contract.methods.setData(5).send({
        from: addresses[0],
    });
    console.log(receipt) */


    //sending the transaction if also possible with the other promise syntax
    contract.methods.setData(7).send({
        from: addresses[0],
    })
      .on('receipt', receipt => console.log(receipt))
      .on('confirmation', (confirmationNumber, receipt) => {
          contract.methods.getData().call()
          .then(data => console.log(data))
      })
      .on('error', (error, receipt) => console.log(error, receipt))

    //checking value of data again
    /* data = await contract.methods.getData().call()
    console.log('data is now:', data) */




    
};

init();


