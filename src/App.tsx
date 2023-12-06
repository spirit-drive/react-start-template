import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h4>Кто?</h4>
          <p>Шайхутдинов Оскар. ПАО Сбер.</p>
        </div>
        <div className="container">
          <h4>Знания?</h4>
          <p>HTML/CSS · React · Redux · Jest</p>
        </div>
        <div className="container">
          <h4>Цель?</h4>
          <p>Структурировать знания. Восполнить пробелы в React и Redux. Узнать Websocket, GraphQL.</p>
        </div>
        <div className="container">
          <h4>Зачем?</h4>
          <p>Использовать знания в проектах.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
