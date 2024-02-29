import React from 'react';
import './Badge.scss';

type BadgeProps = {
  text: string;
  bgColor?: string;
  color?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  text = 'Badge',
  bgColor = 'var(--blaze-orange-50)',
  color = 'var(--primary-800)',
}) => {
  return (
    <div className="badge" style={{ backgroundColor: bgColor, color: color }}>
      {text}
    </div>
  );
};
