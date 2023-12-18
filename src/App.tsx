import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Меня зовут Мария. Живу в г.Минске (Беларусь).</p>
          <p>В рамках данного обучения Я:</p>
          <ul className="App-want">
            <li>Хочу систематизировать знания по React.js.</li>
            <li>Освоить другие сопутствующие в React/Next разработке технологии.</li>
            <li>Написать классный проект и получить комментарии преподавателя</li>
          </ul>
          <p>Занимаюсь фронтенд-разработкой около 2 лет. Работаю в одной белорусской компании)))</p>
        </div>
      </header>
    </div>
  );
}

export default App;
