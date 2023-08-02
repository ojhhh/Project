// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintOwnContent is ERC721Enumerable {
    constructor() ERC721("OwnContent","OWN") {

    }

    mapping(uint256 => string) private tokenURIs; // 토큰마다 메타데이터 URI를 저장하는 매핑

    function mintOwnContent(string calldata ipfsHash) public {
        uint256 ownContentId = totalSupply() + 1;

        tokenURIs[ownContentId] = ipfsHash; // 토큰 ID와 함께 IPFS 해시값을 저장합니다.

        _mint(msg.sender, ownContentId);
    }

    function tokenURI(uint256 ownContentId) public view override returns (string memory) {
        // 토큰 ID에 해당하는 IPFS 해시값을 가져와서 메타데이터 URI를 동적으로 생성합니다.
        string memory baseURI = "https://gateway.pinata.cloud/ipfs/";
        string memory ipfsHash = tokenURIs[ownContentId];
        string memory uri = string(abi.encodePacked(baseURI, ipfsHash));
        return uri;
    }
}
