import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ogenenoghie@gmail.com">
            ogenenoghie@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <LinkItem href="https://github.com/oghenenoghie" target="_blank" rel="noreferrer">
            @oghenenoghie
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building web apps and teaching others to code, one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/oghenenoghie" target="_blank" rel="noreferrer" aria-label="Gabriel's GitHub profile">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/oghie_c" target="_blank" rel="noreferrer" aria-label="Gabriel's Twitter profile">
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:ogenenoghie@gmail.com" aria-label="Email Gabriel">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
