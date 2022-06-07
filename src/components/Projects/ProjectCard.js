import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import ProjectOverlay from "./components/project-overlay";

const ProjectCard = ({ p }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  let rootNode;
  if (isBrowser) {
    rootNode = document.getElementById("modal-root");
  } else {
    rootNode = null;
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{cursor: 'pointer'}}  onClick={openModal}>
      <BlogCard>
        <Img src={p.image} />
        <TitleContent>
          <HeaderThree>{p.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">{p.description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {p.tags.map((t, i) => {
              return <Tag key={i}>{t}</Tag>;
            })}
          </TagList>
          <UtilityList></UtilityList>
        </div>
      </BlogCard>
      {rootNode &&
        ReactDOM.render(
          <ProjectOverlay
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            title={p.title}
            text={p.description}
            images={p.images}
            techStack={p.tags}
          />,
          rootNode
        )}
    </div>
  );
};

export default ProjectCard;
