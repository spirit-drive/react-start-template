import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../shared/ThemeProvider';
import { LangProvider } from '../shared/LangProvider/LangProvider';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Текст писать тут
            </p>
          </header>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
