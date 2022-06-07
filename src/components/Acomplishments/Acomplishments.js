import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 3, text: "Open Source Projects" },
  { number: 30, text: "Different commercial projects" },
  { number: 50, text: "Github Followers" },
  { number: 3, text: "Years of Experience" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <div data-aos="fade-up" key={index}>
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        </div>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
