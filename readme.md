eth todo app based on sample applications

Folder structure
-contracts: contracts live here. Migration handles migration to the blockchain
-migrations directory:all migration files live here
-node_modules: node dependencies
-test dir: tests for smart contract
-truffle-config: main config file
-build: contains the contracts Abstract Binary Interfaces - ABIs. contains the compiled bytecode version of the solidity smart contract, which can be run on the EVM. Also contains JSON representation of the smart contract functions, which can be exposted to external clients, like client-side JavaScript applications