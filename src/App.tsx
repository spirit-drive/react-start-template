import React from 'react';
import './App.css';
import clsx from 'clsx';
import Layout from './components/Layout/Layout';
import { useTheme } from './helper/useTheme';

function App() {
  const { theme } = useTheme();
  const className = `app-${theme}`;

  return (
    <div className={clsx(className, 'general')}>
      <Layout />
    </div>
  );
}

export default App;
