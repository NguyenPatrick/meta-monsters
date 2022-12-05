require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "G4t3MZIY89_ZnwB1Y5GXX0ewYMg2lvaF",
      accounts: ["da3e0940bd3a8453f1f986069339ca7cca33a200c76bab4bf9aad6861e469048"]
    }
  }
};
