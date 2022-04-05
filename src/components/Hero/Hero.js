import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hello i'm Niels <br />
       A Software Developer
     </SectionTitle>
     <SectionText>
       I'm a beginning Software Developer, currently i'm learning to write code through the procces of agile and scrum.
     </SectionText>
     <Button onClick={() => window.location = 'https://github.com/'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;