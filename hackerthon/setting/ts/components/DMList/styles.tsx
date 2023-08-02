

import styled from '@emotion/styled';
    // npm install @emotion/styled 해줘야 함

// collapse button
    // 한번 클릭하면 -> 자식이 보였다가, 다시 클릭하면 사라지는 버튼
    // 접었다, 폈다 하는 버튼
export const CollapseButton = styled.button<{ collapse: boolean }>`
    background: transparent;
    border: none;
    width: 26px;
    height: 26px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 10px;
    /* background-color : lightgray;   // 토글 색깔!  */
    cursor: pointer;

    ${({ collapse }) =>
        collapse &&
        `
        & i {
        transform: none;
        }
    `};
`;
