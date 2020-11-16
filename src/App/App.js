import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
// import Dashboard from '../components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App container m0">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
