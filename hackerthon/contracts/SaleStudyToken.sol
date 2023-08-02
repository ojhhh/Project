// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MintStudyToken.sol";

contract SaleStudyToken {
    MintStudyToken public mintStudyTokenAddress;

    constructor (address _mintStudyTokenAddress) {
        mintStudyTokenAddress = MintStudyToken(_mintStudyTokenAddress);
    }

    mapping(uint256 => uint256) public studyTokenPrices;

    uint256[] public onSaleStudyTokenArray;

    function setForSaleStudyToken(uint256 _studyTokenId, uint256 _price) public {
        address studyTokenOwner = mintStudyTokenAddress.ownerOf(_studyTokenId);
        require(studyTokenOwner == msg.sender,"Caller is not study token owner");
        require(_price > 0, "Price is zero or lower");
        require(studyTokenPrices[_studyTokenId] == 0,"This study token is already on sale");
        require(mintStudyTokenAddress.isApprovedForAll(studyTokenOwner, address(this)),"Study token owner did not approve token");

        studyTokenPrices[_studyTokenId] = _price;

        onSaleStudyTokenArray.push(_studyTokenId);
    }

    function purchaseStudyToken(uint256 _studyTokenId) public payable {
        uint256 price = studyTokenPrices[_studyTokenId];
        address studyTokenOwner = mintStudyTokenAddress.ownerOf(_studyTokenId);
        require(price >0, "Study Token not for sale");
        require(price <= msg.value, "Caller sent lower than price");
        require(studyTokenOwner != msg.sender, "Caller is study token owner");
        
        payable(studyTokenOwner).transfer(msg.value);
        mintStudyTokenAddress.safeTransferFrom(studyTokenOwner, msg.sender,_studyTokenId);

        studyTokenPrices[_studyTokenId] = 0;

        for(uint256 i =0; i<onSaleStudyTokenArray.length; i++){
            if(studyTokenPrices[onSaleStudyTokenArray[i]] == 0){
                 onSaleStudyTokenArray[i] = onSaleStudyTokenArray[onSaleStudyTokenArray.length-1];
                 onSaleStudyTokenArray.pop();
            }
        }
    }

    function getOnsaleStudyTokenArrayLength () public view returns (uint256) {
        return onSaleStudyTokenArray.length;
    }
}