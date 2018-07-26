var Payments = artifacts.require("./Payments.sol");

module.exports = function(deployer) {
  deployer.deploy(Payments);
};
