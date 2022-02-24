// https://eth-ropsten.alchemyapi.io/v2/r3U4EyCfU15gvIbsTLPIdCqLy6mqqZhP

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/r3U4EyCfU15gvIbsTLPIdCqLy6mqqZhP',
      accounts: ['fad9fcc9102b27766f791ee21d6bc56445701ba4493b87ee0223b1d38fa47acb'],
    },
  },
};
