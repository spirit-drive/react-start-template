import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateRandomProduct from './homeworks/ts1/3_write';

function App() {
  console.log(CreateRandomProduct('2'));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
