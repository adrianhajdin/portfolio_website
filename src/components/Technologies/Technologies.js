import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with variants of technologies like JavaScript, React, Xcode, Java, Backend and Frontend
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
        <ListParagraph>
          <ListTitle>Front-End</ListTitle>
            Experiance with <br />
            React.js
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
        <ListParagraph>
          <ListTitle>Back-End</ListTitle>
            Experiance with <br />
            Json 
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="5rem" />
        <ListContainer>
        <ListParagraph>
          <ListTitle>UX/UI</ListTitle>
            Experiance with <br />
            Wireframes 
        </ListParagraph>
        </ListContainer>
      </ListItem>
     
    </List>
  </Section>
);

export default Technologies;
