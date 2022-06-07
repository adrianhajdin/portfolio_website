import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <div data-aos="fade-right">
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js <br />
              Next.js <br />
              Angular.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </div>
      <ListItem></ListItem>
      <div data-aos="fade-left">
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node <br />
              Mongo DB <br />
              PostgreSQL <br />
              Firebase
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </div>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
