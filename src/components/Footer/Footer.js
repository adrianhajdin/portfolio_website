import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterBy, FooterWrapper, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="2rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
    <FooterBy>
    </FooterBy>
  </FooterWrapper>
);

export default Footer;
