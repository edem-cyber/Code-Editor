import { useAppSelector } from '../store/hooks';
import { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { appColors, darkModeColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? 'white' : appColors.font,
    // darkModeColors.font does not work on font
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
declare module '@material-ui/core/styles' {
  interface Theme {
    background: string;
    font: string;
  }

  interface ThemeOptions {
    background: string;
    font: string;
  }
}
