import React from 'react';
import { Resizer } from 'src/shared/resizer';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Resizer>
              <div>
                  <ul>
                      <li>Neil Armstrong</li>
                      <li>Alan Bean</li>
                      <li>Peter Conrad</li>
                      <li>Edgar Mitchell</li>
                      <li>Alan Shepard</li>
                  </ul>
              </div>
          </Resizer>
      </React.Fragment>
    </div>
  );
}

export default App;
