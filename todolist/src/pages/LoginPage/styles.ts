import styled from "styled-components";

export const ModalAnchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #8359a3;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalDiv = styled.div`
  height: 40%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const ModalTitle = styled.h2`
  background: #fff;
`;
