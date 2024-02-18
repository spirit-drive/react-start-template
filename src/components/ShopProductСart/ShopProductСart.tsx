
import React, { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

export interface ShopProductСartProps {
  price: number;
  image?: string;
  name: string;
  description: string;
}

const trunscateString = (value: string, maxSize: number): string => {
  if (value.length <= maxSize) return value
  else return value.substring(0, maxSize - 3) + '...'
}


export const ShopProductСart: FC<ShopProductСartProps> = ({ price, image, description, name, ...props }) => {

  return (
    <div className={styles.shortProductCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F7FF' }} >
        <img height={'70px'} src={image} />
        <div ><h3>{name}</h3>  </div><div ><h3>{price + ' $'}</h3></div>
        <DeleteOutlineSharpIcon style={{ padding: '10px' }} />
      </div>

    </div>
  );
};