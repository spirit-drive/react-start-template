
import React, { FC, useContext, useState } from 'react';
import * as styles from './styles.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { ThemeContext } from '../Provider/ThemeProvider';

export interface IShortProductCardProps {
  price: number;
  image?: string;
  name: string;
  description: string;
}

const trunscateString = (value: string, maxSize: number): string => {
  if (value.length <= maxSize) return value
  else return value.substring(0, maxSize - 3) + '...'
}


export const ShortProduct: FC<IShortProductCardProps> = ({ price, image, description, name, ...props }) => {
  const [theme, ] = useContext(ThemeContext) ;

  return (
    <div className={styles.shortProductCard} style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}}>
      <div style={{display:'flex',justifyContent:'space-between'}} >
        <img height={'70px'} src={image} /> <DeleteOutlineSharpIcon style={{ opacity: '0.4', padding: '5px' }}/>
      </div>
      <div style={{ backgroundColor: '#F5F7FF' }}>
        <div style={{display:'flex',justifyContent:'space-around'}}><h3>{name}</h3> <h3>{price + ' $'}</h3></div>
        <div className={styles.infoContainer}>
          <div dangerouslySetInnerHTML={{ __html: trunscateString(description, 80) }} />
        </div>
      </div>
    </div>
  );
};