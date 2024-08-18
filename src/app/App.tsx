import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>1. Цель углубить знания в React JS, особенно интересуют тесты, оптимизация проекта, архитектура</p>
        <p style={{ width: 1000 }}>2. Выучить React JS/Next JS</p>
        <p>
          3. React JS (средний уровень), могу делать несложные сервера на node js express, так же умею рабоать с
          вебсокетами. Из баз данных умею работать с postgres
        </p>
        <p style={{ width: 1000 }}>
          4. В универе дополнительно изучал web-программирование и после оканчания в конце прошлого года начал работать
          fronted разработчиком
        </p>
      </header>
    </div>
  );
}

export default App;
