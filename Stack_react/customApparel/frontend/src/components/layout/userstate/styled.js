import styled from "styled-components";
import { Image } from "react-bootstrap";

export const UserStateBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

export const ProfileImageBox = styled.a`
  align-items: center;
  display: flex;
  height: 44px;
  text-decoration: none;
`;

export const StyledProfileImage = styled(Image)`
  border: 1px solid rgba(34, 34, 34, 0.1);
  border-radius: 50%;
  height: 44px;
  object-fit: cover;
  overflow: hidden;
  width: 44px;
`;

export const ProfileInfo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  text-decoration: none;
`;

export const StyledUserName = styled.p`
  color: rgba(34, 34, 34, 0.8);
  font-size: 15px;
  letter-spacing: -0.15px;
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.33px;
`;

export const StyledUploadTime = styled.p`
  color: rgba(34, 34, 34, 0.6);
  font-size: 13px;
  letter-spacing: -0.1px;
  white-space: nowrap;
`;

export const StyleButton = styled.button`
  /* 팔로우 버튼 스타일 */
  padding: 5px 10px;
  border: none;
  background-color: #efefef;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;
