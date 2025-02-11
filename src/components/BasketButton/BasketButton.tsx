import React from 'react';
import s from './basketbutton.module.sass';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  count: number;
}

export function BasketButton({ primary = false, size = 'medium', backgroundColor, ...props }: ButtonProps) {
  const count = props.count;
  const mode = primary ? s.primary : s.secondary;
  if (count == 0) {
    return (
      <button type="button" className={[s.button, s[size], mode].join(' ')} style={{ backgroundColor }} {...props}>
        В корзину
      </button>
    );
  }
  return (
    <>
      <button>-</button>
      <input value={props.count}></input>
      <button>+</button>
    </>
  );
}
