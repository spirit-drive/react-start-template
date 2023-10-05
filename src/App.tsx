import React, { useState } from 'react';
import Layout from './components/Layout';
import Modal from './components/Modal';
import OperationSummary from './components/OperationSummary';
import OperationView from './components/OperationView';

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
      <Modal visible={modalVisible} />
      <OperationSummary
        amount={50.0}
        category="Покупки"
        title="Покупка продуктов"
        description="Покупка продуктов в местном супермаркете."
      />
      <OperationView
        amount={100.0}
        category="Покупки"
        title="Покупка продуктов"
        description="Покупка продуктов в местном супермаркете."
        date="2023-09-30"
      />
    </div>
  );
}

export default App;
