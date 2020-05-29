import styled from "styled-components";

export const ContactContainer = styled.section`
  /* border: 1px solid white; */
  padding-top: 20px;
  margin: 0 auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
  font-size: 24px;
`;

export const List = styled.div`
  
`;

export const ContactItem = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-align: center;
    font-weight: lighter;
    margin-left: 30px;
  }
`;

export const ContactSeparator = styled.span`
  position: relative;
  left: -100px;
  width: calc(100% + 200px);
  height: 1px;
  background-color: #03A696;
  display: block;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;


export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 360px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s all;

  :hover {
    cursor: pointer;
    background-color: rgba(194,225,255,.5);
  }
`;