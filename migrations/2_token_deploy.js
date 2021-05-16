const MareBits = artifacts.require("MareBits");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const owner = "0x00Ad9AEb02CC7892c94DBd9E9BE93Ec5cf644632";

module.exports = async function (deployer) {
        await deployProxy(MareBits, ["Mare Bits", "MARE", "233666428910958452213243697852", owner], { deployer, initializer: "initialize" });
};
