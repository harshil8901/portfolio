// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './theme/darkTheme';
import Experience from './components/Experience';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
