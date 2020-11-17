import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from '../components/Dashboard/Dashboard';

function App() {
  return (
    <React.Fragment>
      <div className="App container m0">
        <CssBaseline />
          <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
