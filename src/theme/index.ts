import { DefaultTheme } from 'styled-components/native';
import {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from '@expo-google-fonts/dev';

export const colors = {
  background: '#f6f6f6',
  subtitleText: '#fff',
  textColor: '#3F3356',
  neutralColor: '#B3B3B3',
  primary: {
    main: {
      color: '#FD267D',
      contrastColor: '#fff',
    },
  },
  accent: {
    main: {
      color: '#FF7854',
      contrastColor: '#fff',
    },
  },
};

const theme: DefaultTheme = {
  colors,
  borderRadius: '6px',
  fontFamily: 'Roboto',
  dark: false,
};

export default theme;
