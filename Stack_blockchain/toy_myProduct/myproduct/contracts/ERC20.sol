// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    string public name;

    string public symbol;

    uint8 public decimals = 18;

    address private owner;

    mapping(address => uint) public balances;

    mapping(address => mapping(address => uint)) public override allowance;

    receive() external payable {
        uint amount = msg.value * 200;

        balances[msg.sender] += amount;
    }

    // 컨트랙트 생성자
    constructor(string memory _name, string memory _symbol, uint256 _amount) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
    }

    function balanceOf(address account) external view override returns (uint) {
        return balances[account];
    }

    function transfer(
        address to,
        uint amount
    ) external override returns (bool) {
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }

    //
    function approve(
        address spender,
        uint amount
    ) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    //
    function transferFrom(
        address sender,
        address to,
        uint amount
    ) external override returns (bool) {
        require(allowance[sender][msg.sender] >= amount);
        allowance[sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[to] += amount;
        return true;
    }

    //
    function burn(uint amount) external {
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }
}
