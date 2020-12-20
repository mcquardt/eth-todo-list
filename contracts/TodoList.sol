// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.0;

contract TodoList {
    // code goes here
    constructor() public {
        //
        createTask('task created by contract constructor');
    }

    //
    uint public taskCount = 2;
    uint public dueDate = 5;

    //Defines the task struct - not an instatiation
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    //Accessing the blockchains storage with state variables can be done here
    //Create a tasks state variable with a mapping data-structure
    mapping (uint => Task) public tasks;

    //function keyword creates a function with name createTask()
    //function accepts one argument '_content'. This is the tasks text
    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

}