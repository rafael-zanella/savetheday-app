/* Banner */

import styled from "styled-components";
import img from '../../assets/home-banner.png';

export const BannerImg = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  background: black;
  background: url(${img}) no-repeat center/cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 38px;
    color: #f1f1f1;
    margin-bottom: 10px;
  }
  p {
    color: #f1f1f1;
    font-size: 22px;
  }

`;
