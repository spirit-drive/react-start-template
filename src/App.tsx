import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Layout from './components/Layout/Layout';
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductPreview from './components/ProductPreview/ProductPreview';
import CartItem from './components/CartItem/CartItem';
import AddToCartButton from './components/AddToCartButton/AddToCartButton';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <button onClick={() => setShowModal(true)}>Открыть модалку</button>
      <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
        <h1>Моя модалка</h1>
        <p>Тут какой-то текст...</p>
      </Modal>
      <CartItem title="Наушники" />
      <AddToCartButton count={0} />
      <ProductDetail
        cost={2}
        category="Коты новые"
        title="техника"
        description="Быстрее покупай"
        images={[
          'https://a.allegroimg.com/original/038a7a/0fff0aee4751864c6716c6b94b23/BROKUL-CALABRESE-ZDROWY-ODMIANA-LATWA-W-UPRAWIE',
        ]}
      />
      <ProductPreview
        cost={2}
        title="Превью товара"
        description="Продам гараж"
        image={
          'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666328852_41-mykaleidoscope-ru-p-dovolnaya-morda-kota-krasivo-45.jpg'
        }
      />
    </Layout>
  );
};

export default App;
