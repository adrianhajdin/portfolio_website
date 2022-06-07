import React from "react";
import styled from "styled-components";

const IDisplayPicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid #212d45;
  margin-top: 30px;
  margin-left: auto;
  float: right;
  @media only screen and (max-width: 896px) {
    display: none;
  }
`;

const DisplayPicture = () => {
  return (
    <div data-aos="fade-left">
      <IDisplayPicture src={"/images/profile_pic.jpg"} />
    </div>
  );
};

export default DisplayPicture;
