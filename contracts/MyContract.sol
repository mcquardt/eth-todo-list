pragma solidity ^0.5.0;

contract MyContract {
    uint data;
    uint public public_data;

    function getData() external view returns(uint) {
        return data;
    }

    function setData(uint _data) external {
        data = _data;
    }

    function setDataPrivate(uint _data) private {
        data = _data + 10;
    }
}