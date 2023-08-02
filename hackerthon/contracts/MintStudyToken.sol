// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintStudyToken is ERC721Enumerable {
    constructor() ERC721("HAP_SE Study Community","HAP") {

    }

    mapping(uint256 => uint256) public studyTypes;

    function mintStudyToken() public {
        uint256 studyTokenId = totalSupply() +1;

        uint studyType = uint256(keccak256(abi.encodePacked(block.timestamp,msg.sender,studyTokenId))) % 5 + 1;

        studyTypes[studyTokenId] = studyType;

        _mint(msg.sender, studyTokenId);
    }

    function tokenURI(uint studyTokenId) public override  pure returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/Qmf92eyeD8sEjZg9RLjRRrd5HNSMC8FcsXDQXHvn4imSqj?_gl=1*11noaq2*_ga*NjMxNTE3NzQyLjE2OTA1MDM1MTY.*_ga_5RMPXG14TE*MTY5MDg3ODM2Mi4xMC4xLjE2OTA4Nzg2MzguNjAuMC4w";
    }
}