import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import "@fontsource/inconsolata";
import "@fontsource/nunito";
import Home from './containers/Home2';
import About from './containers/About2';
import Experience from './containers/Experience';
import Wicked from './containers/Wicked';
import Projects from './containers/Projects';
import ProjectPage from './containers/ProjectPage';

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

export const theme2: Theme = createTheme({
  spacing: (value: string | number) => value,
  palette: {
    primary: {
      main: '#F1F8FE',
      light: '#F8FBFE',
    },
    secondary: {
      main: '#ff94f3',
      light: '#ffc9f9',
    },
    background: {
      default: '#FFFFFF',
    }
  },
  typography: {
    allVariants: {
      color: '#000000',
      userSelect: 'none',
    },
    fontFamily: [
      'Nunito',
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
    <ThemeProvider theme={theme2}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/projects/:id'} element={<ProjectPage />} />
          <Route path={'/experience'} element={<Experience />} />
          <Route path={'/wicked'} element={<Wicked />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
