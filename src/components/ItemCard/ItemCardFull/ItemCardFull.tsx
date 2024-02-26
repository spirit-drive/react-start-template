import React from 'react';

export const ItemCardFull = () => {
 return (
    <div className='item-card-full'>
        <div className='images'>
            <img className='image' src={require('./cover.png')} />
            <img src={require('./cover.png')} />
        </div>
        <div className='text'>
            <p>Header</p>
            <p>description</p>
            <div className='price'>100$</div>
            <button />
            <button />
        </div>
    </div>
 )
}