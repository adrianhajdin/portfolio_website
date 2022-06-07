import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import "react-image-gallery/styles/css/image-gallery.css";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .ReactModal__Overlay {
    z-index: 2;
  }
  
  .ReactModal__Overlay {
    opacity: 0;
    transform: translate(-10px, -50px);
    transition: transform 1000ms ease-out, opacity 500ms ease-in;
  }
  
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translate(-10px, -50px);
  }
  
  .ReactModal__Content::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  .ReactModal__Content::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  .ReactModal__Content::-webkit-scrollbar-thumb {
    background: #ffa6b9;
  }
  
  /* Handle on hover */
  .ReactModal__Content::-webkit-scrollbar-thumb:hover {
    background: #EA3A60;
  }  

`;

export default GlobalStyles;