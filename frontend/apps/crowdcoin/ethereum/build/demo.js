const compiledCampaign = require('../build/Campaign.json');

const { ethers } = require('ethers');
const ganache = require('ganache');

const ganacheProvider = ganache.provider({ logging: { quiet: true } });

const provider = new ethers.providers.Web3Provider(ganacheProvider);
const signer = provider.getSigner();

const myTest = async () => {
  const signerAddress = await signer.getAddress();
  const factory = new ethers.ContractFactory(
    compiledCampaign.abi,
    compiledCampaign.evm.bytecode,
    signer,
  );
  const contract = await factory.deploy(signerAddress, '100');
  await contract.deployed();

  // New contract on blockchain from this moment

  const tx = await contract.createRequest('hi', signerAddress, '100');
  await tx.wait();

  const tx2 = await contract.createRequest('hi2', signerAddress, '100');
  await tx2.wait();

  // const receivedRequest = await contract.requests(0);
  // console.log('🚀 ~ receivedRequest', receivedRequest.description);

  const requests = await contract.getRequests();
  console.log('🚀 ~ requestsCount', requests);
};

myTest();
