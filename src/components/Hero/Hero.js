import React from 'react';
import {
  Section,

  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            auctor urna nunc id cursus metus aliquam eleifend mi.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </LeftSection>
      
      </Section>
    </>
  );
};

export default Hero;

