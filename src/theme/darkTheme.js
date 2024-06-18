// src/theme/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 200, 107)',
    },
    background: {
      default: 'rgb(52, 53, 58)',
      paper: 'rgb(52, 53, 58)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgb(255, 200, 107)',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h4: {
      color: 'rgb(255, 200, 107)',
    },
    h6: {
      color: 'rgba(255, 255, 255, 0.87)',
    },
    body1: {
      color: 'rgba(255, 255, 255, 0.87)',
    },
    body2: {
      color: 'rgba(255, 255, 255, 0.87)',
    },
  },
});

export default darkTheme;
