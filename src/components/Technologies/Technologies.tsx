import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider $divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked across a range of technologies in the web development world -
      from full-stack apps to client-ready websites and design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Next.js, React &amp; <br />
            TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python (Django/Flask), <br />
            Laravel &amp; MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Web &amp; Graphic Design <br />
            with Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider $colorAlt />
  </Section>
);

export default Technologies;
