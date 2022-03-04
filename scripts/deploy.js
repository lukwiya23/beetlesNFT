const {ethers} = require('hardhat')

async function main(){
  const Beetles = await ethers.getContractFactory('Beetles')
  const beetles = await Beetles.deploy("Beetles", "CBT")

  await beetles.deployed()
  console.log(`Contract successfully deployed to ${beetles.address}`)


  //MINT NFT
  const newItemId = await beetles.mint("https://gateway.pinata.cloud/ipfs/QmPFh9aiW8iwSDM2K1E9jXiqwG33zsf4xYeKJwb43PbHsA")
  console.log(`NFT MINTED SUCCESSFULLY: ${newItemId}`)
   
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
