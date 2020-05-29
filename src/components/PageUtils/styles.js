import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  padding-top: 60px;
  margin-left: 30px;
  color: #03A696;
`;

export const Page = styled.section`
  width: 100%;
  height: ${props => props.height || 0}px;
  background-color: ${props => props.background || "#FFF"};
`;