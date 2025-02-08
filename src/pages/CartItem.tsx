import React from 'react';
import './css/cart.css';
import Button from "src/shared/components/Button";

interface CartItemProps {
  imageUrl: string;
  description: string;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ imageUrl, description, price, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={description} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-description">{description}</p>
        <p className="cart-item-price">{price}₽</p>
      </div>
      <Button label={'Удалить'} onClick={onRemove} type={true} />
    </div>
  );
};

export default CartItem;
