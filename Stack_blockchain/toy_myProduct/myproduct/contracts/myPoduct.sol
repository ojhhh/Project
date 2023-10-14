// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Product is ERC20 {
    constructor() ERC20("OhShop", "OH") {}

    struct Register {
        string url;
        string info;
        string account;
        uint256 tokenPrice;
    }

    struct Users {
        address account;
        string url;
        string info;
    }

    mapping(address => Register[]) public productlist;

    Users[] public users;

    // 상품 전체 조회
    function getProducts() public view returns (Register[] memory) {
        return productlist;
    }

    // 상품 등록
    function registProducts(
        string url,
        string info,
        uint256 tokenPrice
    ) public {
        productlist[msg.sender].push(
            Register(url, info, msg.sender, tokenPrice)
        );
    }

    // 상품 구매
    function buyProduct(uint index) public {
        require(_balances[msg.sender] >= productlist[index].tokenPrice);
        _balances[msg.sender] -= productlist[index].tokenPrice;

        _balances[productlist[index].account] += productlist[index].tokenPrice;

        // 구매한 사람의 배열에 이미지, 정보, 상품번호를 저장
    }
}
