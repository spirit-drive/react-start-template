import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Ожидания от курса React.js Developer:</h3>
        <ul className='list'>
          <li>эффективно использовать React;</li>
          <li>научиться работать с Redux, Redux-Saga, Redux-thunk;</li>
          <li>приобрести навыки по созданию SPA-приложения и оптимизировать их для production;</li>
          <li>закрепить навыки по TypeScript.</li>
        </ul>
        <h4>О себе:</h4>
        <p>Михаил. Работал с Java, SQL, JavaScript, CSS, HTML, с React не знаком.</p>
        <p>Цель: приобрести навыки, которые позволят перенести продукт на React с использованием Material-UI.</p>
      </header>
    </div>
  );
}

export default App;
