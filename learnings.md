# Session Nr. 1
## compilation and abi differences
Compiled the `ToDolist.sol` file in two different iterations:
- uint `taskCount` was not set to `public` and after compilation the abi was empty
- uint `taskCount` was set to public and the abi was not empty anymore. This suggests the variable `taskCount` can be accessed fromoutside ethereum

## Accesing the initially deployed contract
1. Get the contracts abi and address
2. Create the contract object with `web3.eth.Contract(jsonInterface[, address][, options])`

