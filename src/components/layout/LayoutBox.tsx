import React from 'react';
import './layout.css';

interface LayoutProps {
  /** Контент */
  children: React.ReactElement;
}

/**
 * Компонент LayoutBox с рамкой и отступами
 */
export const LayoutBox = ({ children }: LayoutProps) => <div className="box">{children}</div>;
