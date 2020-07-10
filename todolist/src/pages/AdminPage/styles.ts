import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const UlUser = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
`;

export const DivLiUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: #e0e0e0;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  box-shadow: 12 0 3 9;
`;

export const UserEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  box-shadow: 12 0 3 9;
`;
