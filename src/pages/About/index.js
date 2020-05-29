import React from 'react';
import { Page, Title } from '../../components/PageUtils/styles';
import { AboutContainer } from './styles';
import AboutImg from '../../assets/undraw_about.png';

function About() {
  return (
    <Page height={800}>
      <Title>Sobre nós</Title>
      <AboutContainer>
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <img src={ AboutImg } alt="about" />
      </AboutContainer>
    </Page>
  );
}

export default About;