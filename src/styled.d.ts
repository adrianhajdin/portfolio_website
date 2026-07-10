import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    colors: {
      primary1: string;
      background1: string;
      accent1: string;
      button: string;
      background2: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
