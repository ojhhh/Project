// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KnowToken is ERC20 {
    constructor() ERC20("KnowledgeToken", "KNOW") {
        _mint(msg.sender, 100000 * 10 ** uint(decimals()));
    }
}