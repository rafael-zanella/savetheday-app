import React from 'react';
import { HeaderNav, Titulo, List, ListItem, ListSeparator } from './styles';

function Header( { activeItem } ) {

  return (
    <HeaderNav>
      <Titulo>Save the day</Titulo>
      <List active={activeItem}>
        <ListItem>Home</ListItem>
        <ListItem>Casos</ListItem>
        <ListItem>ONGs</ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Contato</ListItem>
        <ListSeparator/>
        <ListItem>Cadastrar</ListItem>
        <ListItem>Entrar</ListItem>
      </List>
    </HeaderNav>
  );
}

export default Header;
