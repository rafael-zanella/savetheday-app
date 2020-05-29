import React from 'react';
import { FooterPage, Title, Copyrigh } from './styles';
import { List, ListItem } from '../Header/styles';

function Footer() {
  return (
    <FooterPage height={200} background="#F2F2F2">
      <Title>Save the day</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Casos</ListItem>
          <ListItem>ONGs</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      <Copyrigh>&copy; Copyright Save the day - 2020</Copyrigh>
    </FooterPage>
  );
}

export default Footer;