import React from 'react'
import styled from 'styled-components';

const IDisplayPicture = styled.img`
width: 400px;
height: 400px;
border-radius: 50%;
border: 10px solid #212D45;
margin-top: 30px;
margin-left: auto;
@media only screen and (max-width:896px) {
   display : none;
}
`

const DisplayPicture = () => {
  return (
      <IDisplayPicture src={'/images/profile_pic.jpg'} />
  )
}

export default DisplayPicture