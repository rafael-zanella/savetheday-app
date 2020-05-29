import React from 'react';
import { Page, Title } from '../../components/PageUtils/styles';
import { ContactContainer, List, ContactItem, ContactSeparator, Icon, IconContainer } from './styles';
import { FiMapPin, FiPhone, FiMail,FiLinkedin, FiFacebook, FiTwitter} from 'react-icons/fi';

function Contact() {
  return (
    <Page height={450} background="#212121">
      <Title>Contato</Title>

      <ContactContainer>

        <List>
          <ContactItem>
            <FiMapPin size={22} color="#f1f1f1" />
            <p>Porto Alegre, RS</p>
          </ContactItem>

          <ContactItem>
            <FiPhone size={22} color="#f1f1f1" />
            <p>+55 51 98877 3322</p>
          </ContactItem>
          
          <ContactItem>
            <FiMail size={22} color="#f1f1f1" />
            <p>savetheday@email.com</p>
          </ContactItem>
          
          <ContactSeparator />

          <IconContainer>
            <Icon>
              <FiLinkedin size={28} color="#121212" />
            </Icon>

            <Icon>
              <FiFacebook size={28} color="#121212" />
            </Icon>

            <Icon>
              <FiTwitter size={28} color="#121212" />
            </Icon>
          </IconContainer>
        </List>

      </ContactContainer>
    </Page>
  );
}

export default Contact;