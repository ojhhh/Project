// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./basicContract.sol";

contract SaleNFT {
    BasicContract public _nft;

    constructor(address _nftCA) {
        _nft = BasicContract(_nftCA);
    }

    function _saleNFTmint(string memory url) public {
        _nft.minting(url);
    }

    function setApprovalForAll() public {
        _nft.setAppAll(msg.sender, address(this), true);
    }

    // 위임 받은게 맞는지 검증
    function salesNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));
    }
}
