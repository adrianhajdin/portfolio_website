import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import NavDropDown from '../NavDropDown';
import {
  ContactDropDown,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  NavProductsIcon,
  SocialIcons
} from './HeaderStyles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <ContactDropDown onClick={handleMenuClick}>
            Contact
            <NavProductsIcon  isOpen={isMenuOpen} />
            <NavDropDown isOpen={isMenuOpen} />
          </ContactDropDown>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="2rem"/>
        </SocialIcons>
 
        
      </Div3>
     
    </Container>
  );
};

export default Header;
