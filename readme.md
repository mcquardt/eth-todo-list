# Session Nr. 1
## compilation and abi differences
Compiled the `ToDolist.sol` file in two different iterations:
- uint `taskCount` was not set to `public` and after compilation the abi was empty
- uint `taskCount` was set to public and the abi was not empty anymore. This suggests the variable `taskCount` can be accessed fromoutside ethereum

## Accesing the initially deployed contract
1. Get the contracts abi and address
2. Create the contract object with `web3.eth.Contract(jsonInterface[, address][, options])`
3. This contract object can now be used

## Calling a contracts function via the contract object
1. `contract.methods.getGreeting().call()
    .then((result, error) => {console.log(result, error)})`
2. Using the promise api
3. Initially questions arose about the meaning of the `public` keyword in solidity. Compare the `TodoList.sol` and the `Greeting.sol` contract. the state variables `dueDate` and `greeting` can be accessed. However In the `Greeting.sol` contract the `greeting` state variable is not declared public. The function `getGreeting` returns the value of it though via a predefined function. This is basically what the `public` keyword also does. It sets a getter function.
- ToDO: Check how the abi of the `TodoList.sol` looks the getter and setter function should appear there somewhere (I think)

## Moving forward with the `Todolist.sol` contract
1. Creating the first `struct`. Structs are similar to classes in oop languages. 
2. Creating the first `mapping`. Mappings in solidity are similar to 'associative arrays' or hashes in different programming languages. A `mapping` creates key-value pairs which are stored on the blockchain

## `_` in Solidity files
1. variables with `_` in them typically refer to function parameters. Whereas variables without the underscores are used as global variables. There is no semantic difference between them. The style is used to differentiate between function arguments and global variables

## Sending Ether to adresses vs contracts
1. Sending Ether to an address can be done via `web3.eth.sendTransaction{ ... }`. Interestingly this does not work by default when changing the receiving adress to that of a contract. Sending ether to a smart contract is possible either
2. There are two ways to send ether to a contract. First one is to use `contract.methods.foobar().send({...})` is is possible if the function defined in the smart contract is classified as being `payable`. Second option is to use `web3.eth.sendTransaction({...})`. This only works if a fallback function within the smart contract is defined as it is being classified as being `payable`. The `SendEtherToContract.sol` file assembly demonstrates this

## Sending transaction to a smart contract
1. In order to interact with an Ethereum smart contrac two APIs exist. Either `.call()` method or the `.send()` method. `.call()` only allows reading information from the blockchain whereas `.send()` also allows chaning the state of the blockchain
