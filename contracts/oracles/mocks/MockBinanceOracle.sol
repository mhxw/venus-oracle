// SPDX-License-Identifier: BSD-3-Clause
pragma solidity 0.8.13;

import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { OracleInterface } from "../../interfaces/OracleInterface.sol";

contract MockBinanceOracle is OwnableUpgradeable, OracleInterface {
    mapping(address => uint256) public assetPrices;

    constructor() {}

    function setPrice(address asset, uint256 price) external {
        assetPrices[asset] = price;
    }

    function initialize() public initializer {}

    function getPrice(address token) public view returns (uint256) {
        return assetPrices[token];
    }
}
