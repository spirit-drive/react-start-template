import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-info">
        Добрый день, меня зовут Виталий, хочу лучше узнать реакт и его экосистему,
        особенно интересна оптимизация нагруженных систем, архитектура, тесты, заодно разобрать typescript, с ним еще не работал.
        На данный момент работаю в компании на позиции фронтенд разработчик, использую UI material, redux toolkit, react-hook-form и все что с этим связано.
        Проекты на vite т.к. он предлагает лучший шаблон для наших задач и развертывается быстрее,
        раньше работал фрилансером, создавал сайты на wordpress, js, gulp, webpack, sass. В общей сложности 2 с половиной года в веб-разработке
        </p>
      </header>
    </div>
  );
}

export default App;
