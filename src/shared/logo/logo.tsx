import React, { FC, useEffect } from 'react';
import cn from 'clsx';
import './logo.css';

export interface LogoProps {
  size: number
};

/**
 * Logo component
 */
const Logo: FC<LogoProps> = ({ size }) => {

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--logo-width", size + 'px')
  });

  return (
    <div className={cn('wrapper')}>
        <div className={cn("circle")}>
            <span id="text">A</span>
        </div>
    </div>
  );
};

export default Logo;