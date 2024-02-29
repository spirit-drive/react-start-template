import React from 'react';

export const ItemCardFull: React.FC = () => {
  return (
    <div className="item-card-full">
      <div className="images">
        <img className="image" src={require('../../../img/cover.png')} />
        {/*<img src={require('./cover.png')} />*/}
      </div>
      <div className="text">
        <p>Header</p>
        <p>description</p>
        <div className="price">100$</div>
        <button />
        <button />
      </div>
    </div>
  );
};
