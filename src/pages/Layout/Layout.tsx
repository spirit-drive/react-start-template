import React from 'react';
import s from './Layout.module.sass';
import ProductCard from 'src/entities/ProductCard/ProductCard';
import Header from 'src/widgets/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.layout}>
        <ProductCard
          price={1055}
          image={
            'https://cdn.3dmodels.org/wp-content/uploads/Apple/588_Apple_iPhone_15_Plus_Blue/Apple_iPhone_15_Plus_Blue_1000_0001.jpg'
          }
          title="IPhone15"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam possimus facere fugiat neque vel mollitia debitis accusamus nisi explicabo id, sapiente, qui atque repudiandae quos corporis animi asperiores accusantium?"
        />
      </div>
    </>
  );
};

export default Layout;
