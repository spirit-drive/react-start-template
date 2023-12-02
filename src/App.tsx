import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='my-description'>
          <p>В мае 2021 ушёл со стройки во фронтенд</p>
          <p>Сейчас  работаю в SMM агенстве в отделе разработки</p>
          <p>Навык работы с React минимальный </p>
          <p>React интересен и нужен для разработки офлайн приложений для заказчиков.</p>
          <p>Сложно сказать - какие технологии интересны... Знаний мало когда что то попробую -пойму , что мне нужно и интересно</p>
<p>Общий опыт разработки около 3 лет. Это в основном верстка + написание JS для них</p>
        </div>
      </header>
    </div>
  );
}

export default App;
