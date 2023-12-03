import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='my-description'>
          <h2>Немного обо мне</h2>
          <ul>
            <li>Виталий 33 года</li>
            <li>г. Санкт-Петербург</li>
            <li>До мая 2021 работал монтажником СКУД\СКС\пожарки\Электрики и тп...<br/> В общем - тянул провода на стройках и разных объектах</li>
            <li>Сейчас работаю в СММ агенстве в отделе разработки по направлению frontend</li>
          </ul>
          <h2>Навыки </h2>
          <p>если рассматривать только фронт</p>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JS</li>
          </ul>
          <h2>Цель:</h2>
          <p>Цель достаточно простая. Получить знания и систематизировать те крохи по реакту, которые уже есть. <br/> Какие то технологии выделять нехочу так как нужно знать или хотя бы поверхностно понимать как можно больше</p>


        </div>
      </header>
    </div>
  );
}

export default App;
