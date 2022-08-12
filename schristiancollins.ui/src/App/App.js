import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from '../components/Dashboard/Dashboard';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Linux Biolinum',
      ]
    }
  });

  theme.typography.body1 = {
    fontSize: '1.1rem',
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <div className="App container m0">
        <CssBaseline />
          <Dashboard />
      </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
