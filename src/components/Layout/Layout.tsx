import React, { FC, useState } from 'react';
import Header from '../../components/Header/Header';
import ModalController from '../../components/ModalController/ModalController';
import ProductList from '../../components/ProductList/ProductList';
import Collapse from '../Collapse/Collapse';

const Layout: FC = () => {
  const [opened, setOpend] = useState(false);
  return (
    <>
      <Header />
      <ModalController />

      {/*collapse component for demonstration*/}
      <Collapse opened={opened}>
        <div
          style={{
            height: 'auto',
            overflow: 'hidden',
            border: '1px solid black',
            padding: '10px 5px',
          }}
        >
          my collapse children
        </div>
      </Collapse>
      <button onClick={() => setOpend(!opened)}>{opened ? 'Hide' : 'Show'}</button>

      <ProductList />
    </>
  );
};

export default Layout;
