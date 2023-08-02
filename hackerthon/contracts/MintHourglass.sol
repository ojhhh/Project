// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintHourGlass is ERC721Enumerable {
    constructor() ERC721("HAP_SE Study Community", "HAP") {}

    mapping(address => bool) private _minted;

    mapping(uint256 => uint256) public studyTypes;

    function mintStudyToken() public {
        require(!_minted[msg.sender], "This address has already minted a token");

        uint256 hourGlassId = totalSupply() + 1;

        uint studyType = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, hourGlassId))) % 5 + 1;

        studyTypes[hourGlassId] = studyType;

        _mint(msg.sender, hourGlassId);
        _minted[msg.sender] = true;
    }

    // We remove the transferFrom function, effectively disabling transfers.
    // Since the function is not defined here, it won't be callable from the contract.

    function tokenURI(uint hourGlassId) public override pure returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmPWSnqvnZXN1szTWS415obD5T4xrKPSkJPrp9hMM2bGAn?_gl=1*1k4kmk3*_ga*MTA1MzI5ODY2NC4xNjkwODk1MTA4*_ga_5RMPXG14TE*MTY5MDkxNDU4NC4yLjEuMTY5MDkxNDU4Ni41OC4wLjA.";
    }
}
