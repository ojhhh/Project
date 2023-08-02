// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol"; // ERC-20 토큰 컨트랙트를 가져옵니다.

contract TokenTimelock {
    ERC20 public token;
    address public owner;
    uint256 public releaseInterval; // 토큰 보내는 주기 (초 단위)
    address public beneficiary; // 수혜자 주소
    uint256 public lastReleaseTime; // 마지막 보내기 시간

    constructor(
        ERC20 _token,
        uint256 _releaseInterval,
        address _beneficiary
    ) {
        token = _token;
        owner = msg.sender;
        releaseInterval = _releaseInterval;
        beneficiary = _beneficiary;
        lastReleaseTime = block.timestamp;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function setReleaseInterval(uint256 _releaseInterval) public onlyOwner {
        releaseInterval = _releaseInterval;
    }

    function setBeneficiary(address _beneficiary) public onlyOwner {
        beneficiary = _beneficiary;
    }

    function releaseTokens() public onlyOwner {
        uint256 currentTime = block.timestamp;
        require(currentTime >= lastReleaseTime + releaseInterval, "Release interval not reached yet");
        uint256 amount = token.balanceOf(address(this));
        require(amount > 0, "No tokens to release");
        token.transfer(beneficiary, amount);
        lastReleaseTime = currentTime;
    }
}
