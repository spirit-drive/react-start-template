import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>Цели:</ul>
          <li>Изучить TS, React, Redux</li>
          <li>Понять принципы постояния архитектуры приложения с использованием данных технологий</li>
          <li>Научиться писать тесты</li>
          <ul>Навыки:</ul>
          <li>JS, JQuery</li>
          <li>html, css</li>
          <li>.Net, C#</li>
          <li>SQL, TFS</li>
          Всем привет! Меня зовут Анастасия. Имею опыт работы backend-разработчиком более 2-х лет, последний год работаю
          в компании, занимающейся облачными решениями в качестве fullstack-разработчика. Фронт реализован на MVC в
          планах перевести на React.
        </p>
      </header>
    </div>
  );
}

export default App;
