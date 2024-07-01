import React from 'react';
import s from './ProductCard.module.sass';
import AddToCartButton from '@/features/add-to-cart/ui/AddToCartButton';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, description }) => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const truncatedDescription = description.slice(0, 100) + (description.length > 100 ? '...' : '');

  return (
    <div className={s.productCard}>
      <img src={image} alt={title} className={s.productImage} />
      <div className={s.productTitle}>{title}</div>
      <div className={s.productDescription}>{truncatedDescription}</div>
      <div>Price: ${price}</div>
      <AddToCartButton count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default ProductCard;
