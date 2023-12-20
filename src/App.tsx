import React from 'react';
import LogoImg from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoImg className='App-logo'/>
          <p>Цель: систематизировать уже имеющиеся знания и получить новые.</p>
          <p>Чем хочу овладеть: <s>миром</s> актуальными навыками по front-end</p>
          <p>Чем владею: HTML, CSS(SASS, LESS), JS(JQuery, React), Siebel CRM</p>
          <p>О себе: Поляков Андрей, 25.02.1994г.р., увлекаюсь автодиагностикой, Subaru. Работаю в Ak Bars Digital.</p>
      </header>
    </div>
  );
}

export default App;
