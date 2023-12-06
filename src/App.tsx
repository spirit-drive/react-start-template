import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Каких целей хотите достичь:</b> Получить знания по разработке frontend
        </p>
        <p>
          <b>Какими технологиями хотите овладеть:</b> Разработка frontend приложений, научиться их красиво оформлять и
          делать адаптируемыми к различным устройствам
        </p>
        <p>
          <b>Какими технологиями уже владеете:</b> java backend
        </p>
        <p>
          <b>Расскажите о себе и своем опыте:</b> Давно занимаюсь разработкой, сначала на Delphi и C++, потом на java.
          На данный момент потребовались знания по frontend для раелизации некоторых задач на работе.
        </p>
      </header>
    </div>
  );
}

export default App;
