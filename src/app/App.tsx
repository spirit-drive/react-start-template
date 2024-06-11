import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Каких целей хотите достичь: Больше узнать о React и связанных веб технологиях.
        </p>
        <p>
          Какими технологиями хотите овладеть: React (React lifecycle, react hooks, мемоизация, коллбеки), архитектура, Jest и тестирование, генераторы и итераторы, Redux, React Query, Websockets and Webworker, GraphQL, Аутентификация
        </p>
        <p>
          Какими технологиями уже владеете: На базовом уровне - React (функциональные компоненты), typescript, emotion, formik, zustand, axios.
        </p>
        <p>
          О себе: В ИТ направлении работаю давно, но в разработку перешел два года назад. Провожу доработки бекенд сервисов (на C#) и разрабатываю новый веб интерфейс на React на замену устаревшего.
        </p>
      </header>
    </div>
  );
}

export default App;
