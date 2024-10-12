import React from 'react';
import Layout from '../pages/Layout/Layout';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
}

export default App;
