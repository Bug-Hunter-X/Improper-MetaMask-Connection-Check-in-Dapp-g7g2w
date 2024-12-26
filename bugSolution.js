import Web3 from 'web3';

async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return false;
  }

  let accounts = await ethereum.request({ method: 'eth_accounts' });

  if (accounts.length > 0) {
    const account = accounts[0];
    console.log('Wallet is connected: ' + account);
    return account;
  } else {
    console.log('No accounts connected');
    return false;
  }
}

export default checkIfWalletIsConnected;