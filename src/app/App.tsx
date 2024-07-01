import React from 'react';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import Header from '../components/Header/Header';

function App() {
  return (
    <Layout>
      <Header />
      <p className="p-5 mt-5">Lorem Ipsum</p>
    </Layout>
  );
}

export default App;
