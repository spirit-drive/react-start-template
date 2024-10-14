import { ReactNode } from 'react';

type ButtonType = 'small' | 'medium' | 'large';
type ButtonStyle = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export interface ButtonProps {
  children: ReactNode;
  size: ButtonType;
  style: ButtonStyle;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
