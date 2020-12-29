pragma solidity ^0.5.0;

contract SendEtherToContract {
    string public functionCalled;

    //paypable function makes it possible to send ether to contract
    function sendEther() external payable {
        functionCalled = 'sendEther';
    }


    // fallback function. Is called if a transaction is sent to the contract
    // even without defining a function or none exist
    function() external payable {
        functionCalled = 'fallback';
    }
}