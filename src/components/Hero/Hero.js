import Image from 'next/image';
import React from 'react';
import {
  Section,

  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => {
  return (
    <>
      <Section row>
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
        <RightSection>
          <Image
            src="/images/profile.jpeg"
            alt="this is my profile"
            width="500"
            height="600"
            layout="intrinsic"
          />
        </RightSection>
      </Section>
    </>
  );
};

export default Hero;

