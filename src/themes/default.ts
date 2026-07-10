import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fonts: {
    // Actual font-family (from next/font) is applied via the wrapper div in _app.tsx;
    // this is just the base fallback stack.
    title: "system-ui, sans-serif",
    main: "system-ui, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

export default theme;
