import React from 'react';

import ong1Img from '../../assets/ong1.png';
import ong2Img from '../../assets/ong2.png';
import ong3Img from '../../assets/ong3.png';
import ong4Img from '../../assets/ong4.png';
import { Title, Page } from '../../components/PageUtils/styles';
import { Description, ONGContainer, ONGImg } from './styles';

function ONGs() {
  return (
    <Page background="#f1f1f1" height={650}>
      <Title> ONG </Title>
      <Description>Essas são algumas das ONGs cadastradas</Description>      
      <ONGContainer>

        <ONGImg>
          <img src={ong1Img} alt="alt" />
          <p>Dorime</p>
        </ONGImg>

        <ONGImg>
          <img src={ong2Img} alt="alt" />
          <p>Latire</p>
        </ONGImg>

        <ONGImg>
          <img src={ong3Img} alt="alt" />
          <p>Ameno</p>
        </ONGImg>

        <ONGImg>
          <img src={ong4Img} alt="alt" />
          <p>Omenare</p>
        </ONGImg>

      </ONGContainer>
    </Page>
  );
}

export default ONGs;