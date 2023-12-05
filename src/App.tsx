import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>О себе:</h3>
        <div>Семь лет являюсь разработчиком на базе Oracle Siebel CRM на различных проектах</div>
        <div>Последний год активно занимаемся разработкой фронтовой части на React, но это первый проект на фронт разработке</div>

        <h3>Цели:</h3>
		    <div>Научится писать тесты Jest</div>
		    <div>Изучить typescript</div>
		    <div>Углубиться в React</div>

		    <h3>С чем знаком по фронтовой части:</h3>
		    <div>JS,CSS,HTML,git,SOAP UI,gitLab,Oracle PL/SQL</div>

		    <h3>Какие технологии интересны:</h3>
		    <div>ReactJS</div>
			  <div>Typescript</div>
			  <div>Redux + Redux-Saga</div>
			  <div>Jest</div>
      </header>
    </div>
  );
}

export default App;
