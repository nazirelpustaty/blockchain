// https://eth-ropsten.alchemyapi.io/v2/8f1xNScwyKCXArnN4mT7QSozt8wjP7m_
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8f1xNScwyKCXArnN4mT7QSozt8wjP7m_',
      accounts: ['70b4b9378b9d550ed453ec4127f61cebc03a4955e1d2a509c7d04ead608f6866'],
    },
  },
};