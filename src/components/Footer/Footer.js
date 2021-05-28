import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterBy,
  FooterWrapper,
  LinkItem,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Link href="/">
            <LinkItem href="/">
              <DiCssdeck size="3rem" /> <span>Portfolio</span>
            </LinkItem>
          </Link>
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
      &copy; Created Using NextJs {new Date().getFullYear()} 
      </FooterBy>
    </FooterWrapper>
  );
};

export default Footer;
