// const fs = require('fs');

const MoodContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const MoodContractABI = 
 [
      {
        "inputs": [],
        "name": "getMood",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_mood",
            "type": "string"
          }
        ],
        "name": "setMood",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    
  

let MoodContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");

//Request to connect to users wallet
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(
            MoodContractAddress,
            MoodContractABI,
            signer
        )
        // console.log("MoodContract:", MoodContract);
    })
})

//Call smart contract functions
async function getMood() {
    const getMoodPromise = MoodContract.getMood();
    const Mood = await getMoodPromise;
    console.log("Get Mood:", Mood);
}

async function setMood() {
    const mood = document.getElementById("mood").value;
    console.log("Set Mood:", mood);
    const setMoodPromise = await MoodContract.setMood(mood);
    await setMoodPromise;
}