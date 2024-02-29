import React from 'react';
import './SimpleButton.scss';

export const SimpleButton = ({ text = 'Simple Button' }: { text?: string }) => {
  return <div className="simple-button">{text}</div>;
};
