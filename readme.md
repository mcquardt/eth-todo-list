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

