import React from 'react';

interface BasketProps {
  count: number;
}

const Basket = ({ count }: BasketProps) => {
  return (
    <div>
      {count === 0 ? (
        <button>Add To Basket</button>
      ) : (
        <div>
          <button>+</button>
          <input type="text" value={count} readOnly />
          <button>-</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
