import {DefaultTheme} from 'react-native-paper';
import Colors from './colors';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
    accent: Colors.white,
    background: Colors.white,
    text: Colors.textColor,
    surface: '#f2f2f7',
    error: Colors.red,
    disabled: Colors.lightGrey,
    placeholder: '#898989',
    backdrop: '#2B2F3C50',
  },
  //   fonts: configureFonts(fontConfig),
};

export const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
    accent: Colors.white,
    background: '#1f2937',
    text: Colors.white,
    surface: '#353e4b',
    error: Colors.red,
    disabled: Colors.mediumGrey,
    placeholder: '#BCC8E7',
    backdrop: '#2B2F3C50',
  },
  //   fonts: configureFonts(fontConfig),
};
