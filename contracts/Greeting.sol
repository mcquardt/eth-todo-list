// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.7;

contract Greeting {
    string greeting = 'this is the standard greeting';
    //this variable is not public currently. So It does not

    function setGreet(string memory _greeting)public {
        greeting = _greeting;
    }

    function getGreeting() public view returns(string memory) {
        return greeting;
    }
}