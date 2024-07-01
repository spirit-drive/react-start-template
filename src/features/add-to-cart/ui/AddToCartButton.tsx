import React from 'react';

interface AddToCartButtonProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ count, onIncrement, onDecrement }) => {
  if (count === 0) {
    return <button onClick={onIncrement}>Add to Cart</button>;
  } else {
    return (
      <div>
        <button onClick={onDecrement}>-</button>
        <input type="text" value={count} readOnly />
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
};

export default AddToCartButton;
