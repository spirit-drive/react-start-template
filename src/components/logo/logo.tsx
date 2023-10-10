import React from 'react';
import './logo.css';
import imageFile from './logo.svg';

interface LogoProps {
  pathImage: string;
}

/**
 * Компонент Logo
 */
export const Logo = ({ pathImage = imageFile }: LogoProps): React.ReactElement => (
  <a href="#" className="logo">
    <img className="logo-img" src={pathImage} alt="Учёт расходов" />
  </a>
);
