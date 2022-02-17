// https://eth-ropsten.alchemyapi.io/v2/8f1xNScwyKCXArnN4mT7QSozt8wjP7m_
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8f1xNScwyKCXArnN4mT7QSozt8wjP7m_',
      accounts: [''],
    },
  },
};
