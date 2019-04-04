import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import overrides from './overrides';

const primary = {
  light: '#3a5885',
  mainDark: '#002f58',
  main: '#484846',
  dark: '#00042f',
  contrastText: '#fff',
};

const secondary = {
  light: '#ffff53',
  main: '#64B12F',
  dark: '#c79c00',
  contrastText: '#fff',
};

export const theme = createMuiTheme({
  palette: { primary, secondary },
  typography: { useNextVariants: true },
  overrides,
});

export const reverseTheme = createMuiTheme({
  palette: { primary: secondary, secondary: primary },
  typography: { useNextVariants: true },
  overrides,
});
