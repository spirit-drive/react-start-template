import React from 'react';
import './SimpleButton.module.scss';

export const SimpleButton: React.FC = ({ text = 'Simple Button' }: { text?: string }) => {
  return <div className="simple-button">{text}</div>;
};
