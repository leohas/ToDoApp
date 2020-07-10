import styled from "styled-components";

export const AddToDoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 20%;
  width: 100vh;
`;

export const ToDosContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const UlToDo = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
`;

export const DivLiTodo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: #e0e0e0;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  box-shadow: 12 0 3 9;
`;

export const ToDoEmpty = styled.div`
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

export const LogOutButton = styled.button`
  background: #cd0000;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  width: 135px;
  height: 40px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`;
