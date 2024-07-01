import React, { useState } from 'react';
import UserModal from '@/features/user/components/UserModal';
import Layout from '@/app/layout/Layout';
import Header from '@/widgets/header/Header';
import ProductCard from '@/widgets/ProductCard/ProductCard';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Layout>
      <Header />
      <button onClick={handleOpenModal}>Open Modal</button>
      <UserModal isOpen={modalOpen} onClose={handleCloseModal} />
      <ProductCard
        title="iPhone 15 Pro Max"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price={159.99}
        image="https://www.gstatic.com/webp/gallery3/1.sm.png"
      />
      <ProductCard
        title="iPhone 15 Pro Max"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price={159.99}
        image="https://www.gstatic.com/webp/gallery3/1.sm.png"
      />
      <ProductCard
        title="iPhone 15 Pro Max"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price={159.99}
        image="https://www.gstatic.com/webp/gallery3/1.sm.png"
      />
      <ProductCard
        title="iPhone 15 Pro Max"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price={159.99}
        image="https://www.gstatic.com/webp/gallery3/1.sm.png"
      />
    </Layout>
  );
}

export default App;
