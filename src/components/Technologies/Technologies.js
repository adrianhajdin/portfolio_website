import React from 'react'
import { DiFirebase, DiReact, DiZend } from "react-icons/di"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles"

const Technologies = () => {
    return (
      <Section>
            <SectionDivider divider />

        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I've worked with a range a technologies in the web development world. From the Back-end To the Design
        </SectionText>
        <List>
          <ListItem>
            <picture>
              <DiReact size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
               Front-end Stack with the latest tech stack
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiFirebase size="3rem"/>
            </picture>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with  <br />Node and Databases
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiZend size="3rem"/>
            </picture>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with working with tools, such as Figma
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
        <SectionDivider colorAlt/>
      </Section>
  )
}

export default Technologies
