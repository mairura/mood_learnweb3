const hre = require("hardhat");

async function main() {
 
  const Mood = await hre.ethers.getContractFactory("MoodDiary");
  const moodSet = await Mood.deploy();

  await moodSet.deployed();

  console.log("MoodDiary deployed to:", moodSet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
