const Web3 = require('web3');

const MyContract = require('../build/contracts/MyContract.json')



const init = async () => {
    const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');
    const contract = new web3.eth.Contract(
        MyContract.abi,
        MyContract.networks['5777'].address
    )

    public_data = await contract.methods.public_data().call()
    console.log(public_data)

    data  = await contract.methods.getData().call()
    console.log(data)
};

init();
console.log('test')


