import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <b>Цели:</b>
          <ul>
            <li>Получить опыт разработки приложений с использованием React</li>
            <li>Разобрать хорошие/плохие практики разработки, тестирования</li>
          </ul>

          <b>Владение технологиями:</b>
          <ul>
            <li>.Net Framework, .Net Core, Entity, js</li>
          </ul>

          <b>Опыт:</b>
          <ul>
            <li>Backend разработка, 6 лет</li>
          </ul>
      </header>
    </div>
  );
}

export default App;
