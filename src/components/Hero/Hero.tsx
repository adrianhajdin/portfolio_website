import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => (
  <>
    <Section $row $nopadding>
      <LeftSection>
        <SectionTitle $main>
          Hi, I&apos;m Gabriel <br />
          Web Developer &amp; Designer
        </SectionTitle>
        <SectionText>
          I build full-stack web applications and client websites - from school and training management systems to eCommerce platforms - and teach others to code along the way.
        </SectionText>
        <Button onClick={scrollToProjects}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;