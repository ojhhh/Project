import styled from "styled-components";
import { Image } from "react-bootstrap";

export const UserBoxContainer = styled.div`
  align-items: center;
  display: flex;
  /* box-sizing: border-box; */
`;

export const StyledLikeIconWrapper = styled.span``;

export const StyledImage = styled(Image)`
  border: 1px solid rgba(34, 34, 34, 0.1);
  border-radius: 50%;
  height: 28px;
  -o-object-fit: cover;
  object-fit: cover;
  overflow: hidden;
  width: 28px;
`;

export const StyledUsername = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(34, 34, 34, 0.8);
  flex: 1;
  font-size: 15px;
  letter-spacing: -0.15px;
  padding-left: 4px;
  padding-right: 6px;
  white-space: nowrap;
`;
