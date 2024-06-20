import { createTheme } from '@mui/material/styles';

// Define a dark theme using MUI's createTheme function
const darkTheme = createTheme({
  // Customize the palette for dark mode
  palette: {
    mode: 'dark', // Set mode to dark
    primary: {
      main: 'rgb(36, 36, 38)', // Dark primary color
    },
    background: {
      default: 'rgb(36, 36, 38)', // Dark background color for default
      paper: 'rgb(36, 36, 38)', // Dark background color for paper elements (e.g., cards)
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)', 
      secondary: 'rgba(211, 211, 211, 0.87)', 
    },
  },
  // Customize typography styles
  typography: {
    fontFamily: 'Raleway,Poppins,Open Sans', 
    h4: {
      color: 'rgba(255, 255, 255, 0.87)', // White color for h4 headings
    },
    h6: {
      color: 'rgba(211, 211, 211, 0.87)', // Light grey color for h6 headings
    },
    body1: {
      color: 'rgba(211, 211, 211, 0.87)', // Light grey color for body text
    },
    body2: {
      color: 'rgba(211, 211, 211, 0.87)', // Light grey color for secondary body text
    },
  },
});

export default darkTheme;
