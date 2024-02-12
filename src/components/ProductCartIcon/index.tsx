import React, { FC, HTMLProps, ReactNode } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProductCartIconProps {
  count?: number;
}


export const ProductCartIcon: FC<ProductCartIconProps> = ({ count, ...props }) => {

  return (
    <>
     
        <div style={{ display: 'flex', flexDirection:'column', alignItems:'flex-start' }}>
        {count > 0 ?<><input value={count} style={{maxWidth:'200px',border:'none'}}/>
          <div>
            <button><RemoveIcon /></button>
            <button><AddIcon /></button>
          </div>
          </>
          :  <button><ShoppingBasketIcon /></button> }
        </div>
       
    </>

  );
};
