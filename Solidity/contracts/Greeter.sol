//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract MoodDiary {
    string mood;

    //create a function that writes a mood to the smart contract
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    //create a function that reads the mood from the smart contracts
    function getMood() public view returns(string memory){
        return mood;
    }

    //TODO Store a list of mood for later retreval
    //TODO Learn to access previous blockchain transactions
}
