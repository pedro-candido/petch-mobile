import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      subtitleText: string;
      textColor: string;
      neutralColor: string;
      primary: {
        main: {
          color: string;
          contrastColor: string;
        };
      };
      accent: {
        main: {
          color: string;
          contrastColor: string;
        };
      };
    };
    fontFamily: string;
    borderRadius: string;
    dark: boolean;
  }
}
