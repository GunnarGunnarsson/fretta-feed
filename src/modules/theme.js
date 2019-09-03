import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#FFFFFF',
      dark: '#1A1A1A'
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      xLight: green[50],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Georgia",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Raleway', sans-serif"
  }
});

const fontHeader = {
  letterSpacing: 0,
  color: '#2A2A2A'
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      fontFamily: "Georgia",
      letterSpacing: 0,
      fontWeight: 100,
      color: '#2A2A2A',
      fontSize: '55px',
      lineHeight: '60px'
    },
    h2: {
      fontFamily: "Georgia",
      lineHeight: '60px',
      letterSpacing: 0,
      fontSize: '45px',
      fontWeight: 100,
      color: '#2A2A2A'
    },
    h3: {
      fontFamily: "Georgia",
      lineHeight: '23px',
      letterSpacing: 0,
      fontSize: '29px',
      fontWeight: 600,
      color: '#2A2A2A'
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      fontFamily: "Georgia",
      lineHeight: '25px',
      letterSpacing: 0,
      fontSize: '20px',
      fontWeight: 100,
      color: '#2A2A2A'
    },
    subtitle2: {
      fontFamily: "'Raleway', sans-serif",
      lineHeight: '18px',
      letterSpacing: '2px',
      fontSize: '12px',
      fontWeight: 500,
      color: '#8e989c'
    },
    link: {
      fontFamily: "Georgia",
      lineHeight: '13.5px',
      letterSpacing: 0,
      fontSize: 17,
      fontWeight: 100,
      color: '#2A2A2A'
    },
    body1: {
      fontFamily: "'Raleway', sans-serif",
      lineHeight: '27px',
      letterSpacing: 0,
      fontSize: '16px',
      fontWeight: 400,
      color: '#2A2A2A'
    },
    body2: {
      fontFamily: "'Raleway', sans-serif",
      lineHeight: '12px',
      letterSpacing: '2px',
      fontSize: '12px',
      fontWeight: 500,
      color: '#2A2A2A'
    },
    button: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '14px',
      letterSpacing: '2px',
      display: 'inline-block',
      width: '180px',
      textAlign: 'center',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#EC403C'
    }
  }
};

export default theme;
