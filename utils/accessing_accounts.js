const Web3 = require('web3');

const MyContract = require('../build/contracts/MyContract.json')



const init = async () => {
    const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');
    web3.eth.getAccounts()
    .then(console.log);

    //using the callback syntax
    /* web3.eth.sendTransaction({
        from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
        data: code // deploying a contracrt
    }, function(error, hash){
        ...
    }); */
    
    // using the promise
    // I can use it this way because my ganache node has this account unlocked
    /* web3.eth.sendTransaction({
        from: '0x70FE9ea92Ce4736c3D9445810B02060b7Cb2a08b',
        to: '0xE23E347C57056b9AB3C0001d3B9F5249F787E5eE',
        value: '1000000000000000'
    })
    .then(function(receipt){
        console.log('receipt is:', receipt)
    }); */
    
// using the event emitter
    web3.eth.sendTransaction({
        from: '0xE64c2D50C90C7ad7d0B93db91031DD1dc6C8e3CF',
        to: '0xE23E347C57056b9AB3C0001d3B9F5249F787E5eE',
        value: web3.utils.toWei('10', 'ether')

    })
    .on('transactionHash', function(hash){
        console.log('hash is:', hash)
    })
    .on('receipt', function(receipt){
        console.log('receipt ist:', receipt)

    })
    .on('confirmation', function(confirmationNumber, receipt){ 
        console.log('confirmationNumber is:', confirmationNumber, 'receipt:', receipt)
    })
    .on('error', console.error); // If a out of gas error, the second parameter is the receipt.
};

init();


