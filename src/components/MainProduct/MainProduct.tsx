import React, { FC, HTMLProps, ReactNode, useContext } from 'react';
import * as styles from './styles.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { ThemeContext } from '../Provider/ThemeProvider';

interface MainProductProps {
  category?: string;
  description?: string;
  title?: string;
  imageLink: string;
  price?: number;
}


export const MainProduct: FC<MainProductProps> = ({ category, title, description, imageLink, price, ...props }) => {
  const [theme, ] = useContext(ThemeContext) ;

  return (
    <section className={styles.storybookPage} style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}}>
      <h3>{category}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><h2>{title}</h2>  <DeleteOutlineSharpIcon style={{ opacity: '0.2', padding: '5px' }} /></div>
        <br />
        <h1>{price + ' $'}</h1>
        <img height={'120px'} src={imageLink} />
        <p>
          <div style={{ backgroundColor: '#F5F7FF' }} dangerouslySetInnerHTML={{ __html: description }} />
        </p>
    </section>
  );
};
