import React from 'react';
import Logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" />
        <div>
          <h2>Каких целей хочу достичь</h2>
          <p>Структуировать знания по reactjs, на данный момент только теория, практики было очень мало</p>
          <p>Изучить typescript</p>
          <p>Изучить и применять паттерны разработки</p>
          <p>Научится писать тесты</p>
          <p>Перенять лучшие практики</p>
        </div>
        <div>
          <h2>Какими технологиями хочу владеть</h2>
          <p>react</p>
          <p>typescript</p>
          <p>redux и все что с ним связано</p>
          <p>webpack более углубленно</p>
          <p>graphQL</p>
          <p>jest</p>
        </div>
        <div>
          <h2>Какими технологиями уже владею</h2>
          <p>Если брать только фронт</p>
          <p>html</p>
          <p>css, scss</p>
          <p>javascript</p>
          <p>restapi</p>
        </div>
        <div>
          <h2>О себе</h2>
          <p>Меня зовут Александр, если в кратце в ИТ более 13 лет, работал в разных направлениях таких как back, devops, сейчас на фронте, работал в крупных компаниях :)</p>
        </div>

      </header>
    </div>
  );
}

export default App;
