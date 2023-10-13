// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Product is ERC20 {
  constructor() ERC20("OhShop","OH"){}

  struct Register {
    string url;
    string info;
    string account;
    string tokenPrice;
  }

  mapping(address => Register[]) public productlist;

  function buyProduct(index) public {
    require(_balances[msg.sender] >= productlist[index].tokenPrice);
  }

}
