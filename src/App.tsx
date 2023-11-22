import React, { useState } from 'react';
import Layout from './components/Layout';
import Modal from './components/Modal';
import OperationSummary from './components/OperationSummary';
import OperationView from './components/OperationView';
import { Category } from './types';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      <Layout />
      <button onClick={() => setModalVisible(!modalVisible)} style={{ marginTop: 250 }}>
        Modal
      </button>
      <OperationSummary
        amount={50.0}
        category="Покупки"
      <Modal visible={modalVisible}>Modal Text</Modal>
      <OperationSummary
        amount={50.0}
        category={Category.sales}
        title="Покупка продуктов"
        description="Покупка продуктов в местном супермаркете."
      />
      <OperationView
        amount={100.0}
        category="Покупки"
        title="Покупка продуктов"
        description="Покупка продуктов в местном супермаркете."
        date="2023-09-30"
        category={Category.marketing}
        title="Покупка продуктов"
        description="Покупка продуктов в местном супермаркете."
        date={new Date(2023, 8, 30)}
      />
    </div>
  );
}

export default App;
