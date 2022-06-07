import React from 'react';
import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <div data-aos="fade-right">
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
        </SectionTitle>
        <SectionText>
          This is Sufyan Khatri, I am full stack developer having 3+ years of
          experience in development, deployment and testing of modern web and
          mobile applications
        </SectionText>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
