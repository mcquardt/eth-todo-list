//Any time a new smart contract is created the state of the blockchain is being updated. Since blockchain is fundamentally
//a database changes are to be handled as migrations

var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
    deployer.deploy(TodoList);
  };