// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./shopNFT.sol";

contract ShopNFT {
    ShopNFT public _nft;

    constructor(address _nftCA) {
        _nft = ShopNFT(_nftCA);
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
