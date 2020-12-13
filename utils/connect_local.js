var Web3 = require('web3');

//local ganache blockchain
var web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');

const MyContract = require('../build/contracts/TodoList.json')

//console.log(Web3.version)
//web3.eth.getBlock(3150)
//.then(console.log);)

//Most web3.js objects allow a callback as the last parameter, 
//as well as returning promises to chain functions.
/* web3.eth.getBlock(9, function(error, result) {
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});
 */

/* block = web3.eth.getBlock(9)
    .then( resolve => {
        console.log(resolve)
        console.log('promise resolved')
    })
    .catch( error => {
        console.log(error)
        console.log('promise got rejected with catch')
    })
 */



 //create contrac tobject
/*  const contract = new web3.eth.Contract(
     //abi
     //adress
 );
 */

 console.log(MyContract.abi)
 console.log('hi')