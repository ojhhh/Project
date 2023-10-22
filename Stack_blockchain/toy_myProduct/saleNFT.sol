// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./shopNFT.sol";

contract SaleNFT {
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

    // NFT 구매 요청
    function buyNFT(uint256 _tokenId) external payable {
        address owner = _nft.ownerOf(_tokenId);
        require(msg.sender != owner);
        payable(owner).transfer(msg.value);
        _nft.transferFrom(owner, msg.sender, _tokenId);

        _nft._buyList[_tokenId] = _nft.buyList({
            offer: msg.sender,
            price: msg.value,
            accept: false
        });
    }

    // NFT 구매 승인
    function acceptNFT(uint256 _tokenId) public {
        address owner = _nft.ownerOf(_tokenId);
        require(msg.sender == owner);

        ShopNFT.buyList memory buylist = _nft.getBuyRequest(_tokenId);
        payable(owner).transfer(buylist.price);

        _nft.transferFrom(owner, buylist.offer, _tokenId);

        _nft.acceptBuyRequest(_tokenId);
    }
}
