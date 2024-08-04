import React from 'react';
import { ToolTip } from 'src/shared/tooltip/tooltip';
import { Button } from 'src/stories/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToolTip text="Тут клевая подсказка" position="bottom" displayTime={450}>
        <Button label="Наведи на меня" size="large" />
      </ToolTip>
    </div>
  );
}

export default App;
