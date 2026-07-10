import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <DiCssdeck size="3rem" /> <span>Gabriel</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/oghenenoghie" target="_blank" rel="noreferrer" aria-label="Gabriel's GitHub profile">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/oghie_c" target="_blank" rel="noreferrer" aria-label="Gabriel's Twitter profile">
          <AiOutlineTwitter size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:ogenenoghie@gmail.com" aria-label="Email Gabriel">
          <AiOutlineMail size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
