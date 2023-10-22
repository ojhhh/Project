// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ShopNFT is ERC721 {
    uint256 private _id = 0;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    struct nftData {
        uint256 tokenId;
        string rank;
        address owner;
        uint256 price;
    }

    struct buyList {
        uint256 tokenId;
        address offer;
        uint256 price;
        bool accept;
    }

    mapping(uint256 _id => string) private _tokenIds;

    mapping(uint256 _id => string) public _getAllOwner;

    mapping(uint256 _id => address) public _getBuylist;

    mapping(uint256 => uint256) public tokenPrices;

    mapping(address => uint256) public salesAmount;

    nftData[] public _nftData;
    buyList[] public _buylist;

    function minting(string memory jsonHash) public {
        _tokenIds[_id] = jsonHash;
        _mint(msg.sender, _id);
        _getAllOwner[_id] = jsonHash;
        nftData memory newData = nftData({
            tokenId: _id,
            rank: this.tokenRanking(_id),
            owner: msg.sender,
            price: 1
        });

        _nftData.push(newData);
        tokenPrices[_id] = 0.001 ether;
        _id += 1;
    }

    // NFT 랭킹
    function tokenRanking(uint _tokenId) public view returns (string memory) {
        if (_tokenId < 3) return "Platinum";
        if (_tokenId < 10) return "Gold";
        if (_tokenId < 30) return "Silver";
        return "Bronze";
    }

    // json 해시주소
    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return _tokenIds[_tokenId];
    }

    // pinata 기본경로
    function _baseURI() internal view override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function setAppAll(address owner, address operator, bool approved) public {
        _setApprovalForAll(_msgSender(), operator, approved);
    }

    // 발생된 전체 NFT의 수
    function getTokenIdLength() public view returns (uint256) {
        return _id;
    }

    // CA에 생성된 모든 NFT 가져오기
    function getAllOwner() public view returns (string[] memory) {
        string[] memory allOwner = new string[](_id);
        for (uint i = 0; i < _id; i++) {
            allOwner[i] = _getAllOwner[i];
        }
        return allOwner;
    }

    // nftData 가져오기
    function getNFTData() public view returns (nftData[] memory) {
        return _nftData;
    }

    // 내가 구매한 NFT 리스트
    function getBuylist() public view returns (buyList[] memory) {
        return _buylist;
    }

    //
    function getBuyRequest(
        uint256 _tokenId
    ) public view returns (buyList memory) {
        for (uint i = 0; i < _buylist.length; i++) {
            if (_buylist[i].tokenId == _tokenId && !_buylist[i].accept) {
                return _buylist[i];
            }
        }
        revert("empty");
    }

    function _saleNFTmint(string memory url) public {
        minting(url);
    }

    function setApprovalForAll() public {
        setAppAll(msg.sender, address(this), true);
    }

    // 위임 받은게 맞는지 검증
    function salesNFT() public view returns (bool) {
        return isApprovedForAll(msg.sender, address(this));
    }

    // NFT 구매 요청
    function buyNFT(uint256 _tokenId) external payable {
        address owner = ownerOf(_tokenId);
        require(msg.sender != owner);

        salesAmount[owner] += msg.value;

        buyList memory newbuylist = buyList({
            tokenId: _tokenId,
            offer: msg.sender,
            price: msg.value,
            accept: false
        });

        _buylist.push(newbuylist);
    }

    // NFT 구매 승인
    function acceptNFT(uint256 _tokenId) external {
        buyList memory accepted = _buylist[_tokenId];
        address owner = ownerOf(accepted.tokenId);

        require(msg.sender == owner);
        require(!accepted.accept);

        salesAmount[owner] += accepted.price;
        _transfer(owner, accepted.offer, accepted.tokenId);
        accepted.accept = true;
        _buylist[_tokenId] = accepted;
    }
}
