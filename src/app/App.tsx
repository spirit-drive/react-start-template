import React from 'react';
import './App.css';
import { ThemeProvider } from './providers/theme/ThemeProvider';
import { LocalizationProvider } from './providers/localization/LocalizationProvider';
import Layout from 'src/pages/Layout/Layout';

function App() {
  return (
    <>
      <LocalizationProvider />
      <ThemeProvider>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
