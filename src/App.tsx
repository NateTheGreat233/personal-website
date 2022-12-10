import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import "@fontsource/inconsolata";
import Home from './containers/Home';
import About from './containers/About';
import Experience from './containers/Experience';

const theme: Theme = createTheme({
  spacing: (value: string | number) => value,
  palette: {
    primary: {
      main: '#2E2E2E',
    },
    secondary: {
      main: '#dbdad5',
      dark: '#807f7c'
    },
    background: {
      default: '#1a1a1a',
    }
  },
  typography: {
    allVariants: {
      color: '#dbdad5'
    },
    fontFamily: [
      'Inconsolata',
    ].join(","),
    h1: {
      fontSize: 50,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/experience'} element={<Experience />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
