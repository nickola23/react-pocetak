import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>reactApp.jsx</code><br></br>Here you can explore more of my projects.
        </p>
        <Link
        className="App-link" 
        to="/counter" 
        rel="noopener noreferrer">
        Get Started</Link>
      </header>
    </div>
  );
}

export default App;
