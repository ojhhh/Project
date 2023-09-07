import styled from "styled-components";

export const PostUpdateWrap = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 0 40px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  padding-top: 12px;
  overflow: hidden;
  max-height: ${(props) => (props.expanded ? "none" : "60px")};
  position: relative;
`;
