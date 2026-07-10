import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle $main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p) => {
        return (
          <BlogCard key={p.id}>
          <Img src={p.image} alt={`${p.title} preview`} />
            <TitleContent>
              <HeaderThree $title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t) => {
                  return <Tag key={t}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank" rel="noreferrer">Live Demo</ExternalLinks>
              )}
              <ExternalLinks href={p.source} target="_blank" rel="noreferrer">Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;