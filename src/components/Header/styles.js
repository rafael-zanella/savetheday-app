import styled from "styled-components";

export const HeaderNav = styled.header`
  position: absolute;
  top: 0;
  height: 90px;
  width: 100%;
  max-width: 1920px;
  background-color: #f1f1f1a5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-shadow: 1px .5px 2px rgb(255, 255, 254, 0.5);
`;

export const Titulo = styled.h1`
  font-size: 32px;
  color: #03A696;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgb(0, 0, 0, 0.5);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  li:nth-child(${ props => props.active }) {
    color: #03A696;
  }
`;

export const ListItem = styled.li`
  margin: 8px;
  padding: 5px;
  font-weight: lighter;
  transition: .5s all;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  
  &:hover {
    cursor: pointer;
    opacity: 80%;
    color: #03A696;
  }
`;

export const ListSeparator = styled.span`
  margin: 10px;
  display: block;
  height: 50px;
  width: 1px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
`;

