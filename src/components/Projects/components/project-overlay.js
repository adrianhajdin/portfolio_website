import React from "react";
import Modal from "react-modal";
import { Box, Heading, Text } from "theme-ui";
import Carousal from "./carousal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
    maxWidth: "600px",
    width: "80%",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    maxHeight: "86vh",
  },
};

Modal.setAppElement("#root");

function ProjectOverlay({
  src,
  altText,
  title,
  text,
  modalIsOpen,
  closeModal,
  images,
  techStack,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      closeTimeoutMS={1000}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Carousal images={images} />
      <Box sx={styles.card}>
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>Stack</Heading>
          <Box sx={styles.techStackWrapper}>
            {techStack?.map((tech) => (
              <Text sx={styles.techStackWrapper.subTitle} key={tech}>
                {tech}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center"],
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: ["justify", null, "justify"],
    overflow: "hidden",
    textAlign: "center",
    borderRadius: "4px",
    width: "100%",
  },
  imageBox: {
    height: "250px",
    width: "100%",
  },
  img: {
    mb: 4,
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
  wrapper: {
    width: ["100%", "80%", null, "60%"],
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: [3, 4],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [1, null, 2],
      mt: 2,
      color: "#ea3a60",
      fontFamily: '"DM Sans",sans-serif',
    },
    subTitle: {
      fontSize: [1, null, null, 2],
      fontWeight: 400,
      lineHeight: "1.9",
      color: "black",
    },
  },
  techStackWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    subTitle: {
      color: "black",
      fontSize: ['10px', 2],
      fontWeight: 400,
      lineHeight: "1.9",
      whiteSpace: "nowrap",
      marginRight: ["16px", "24px", null, "36px"],
    },
  },
};

export default ProjectOverlay;
