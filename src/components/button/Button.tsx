import React, { FC, useContext  } from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  func: () => void;
}

export const Button: FC<ButtonProps> = ({ primary, backgroundColor, size, label, func, ...props }) => {
  const mode = primary ? "storybookButtonPrimary" : "storybookButtonSecondary";

  const onClick = () => {
    func();
  };

  return (
    <button
      type="button"
      className="storybookButton"
      style={{ backgroundColor: backgroundColor}}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
