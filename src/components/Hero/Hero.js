import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm <br />
          Haisam Khurshid
        </SectionTitle>
        <SectionText>
        Experienced MERN Full Stack Developer with a passion for building dynamic and responsive web applications. Proficient in MongoDB, Express.js, React.js, and Node.js.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;