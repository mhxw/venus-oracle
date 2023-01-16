// SPDX-License-Identifier: BSD-3-Clause
pragma solidity 0.8.13;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../ChainlinkOracle.sol";
import "../../interfaces/VBep20Interface.sol";

contract MockChainlinkOracle is OwnableUpgradeable {
    mapping(address => uint256) public assetPrices;

    //set price in 6 decimal precision
    constructor() {}

    function setPrice(address asset, uint256 price) external {
        assetPrices[asset] = price;
    }

    function initialize() public initializer {
        __Ownable_init();
    }

    //https://compound.finance/docs/prices
    function getUnderlyingPrice(address vToken) public view returns (uint256) {
        address token = VBep20Interface(vToken).underlying();
        return assetPrices[token];
    }
}
