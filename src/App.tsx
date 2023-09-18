import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const temps = [1, 2, 3, 4, 5, 6];
  temps.forEach((temp) => {
    console.log(temp);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <div>
        <span></span>
      </div>
    </div>
  );
}

export default App;
