import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="item"><b>Моя цель</b> научиться разрабатывать современные, а главное – масштабируемые веб-приложения.</p>
        <p className="item">Для этого хочу изучить React.js и сопутствующие технологии.</p>
        <p className="item">
          На сегодняшний день я уже довольно неплохо знаком с: 
          <div><span>PHP</span> <span>SQL</span> <span>XML</span> <span>SVG</span> <span>JS</span> <span>CSS</span> <span>HTML</span></div>
          <small>В общем, классический набор</small>
        </p>
        <p className="item">А вообще я работаю с веб-технологиями с 2010 года, начинал как дизайнер-разработчик на, умирающем тогда, flash. После работал на jQuery и чистом JS. В 2016-м году стал всё больше погружать в бэкенд, а позже ушел в него с головой.
        В настоящее время работаю тимлидом в компании с госучастием. Наша команда работает над CRM/ERP для внутреннего заказчика.</p>
      </header>
    </div>
  );
}

export default App;
