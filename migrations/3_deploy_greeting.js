//Any time a new smart contract is created the state of the blockchain is being updated. Since blockchain is fundamentally
//a database changes are to be handled as migrations

var Greeting = artifacts.require("./Greeting.sol");

module.exports = function(deployer) {
    deployer.deploy(Greeting);
  };