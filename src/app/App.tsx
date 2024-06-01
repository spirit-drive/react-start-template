import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const aboutMe: string[] = [
    'Привет, меня зовут Егор.',
    'Я — разработчик интерфейсов. Мой стэк: TypeScript, React, Angular',
    'Работаю в СберКорусе и делаю мир лучше с doka.guide',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {aboutMe.map((item: string) => (
          <p key={item}>{item}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
