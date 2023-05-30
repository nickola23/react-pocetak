import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my <code>reactProject</code><br></br>Here you can explore multiple projects.
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
