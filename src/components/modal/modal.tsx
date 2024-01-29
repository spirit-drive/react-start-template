import React, { FC } from 'react';
import './modal.css';

interface ModalProps {
  children?: JSX.Element;
  setActive?: (...args: any[]) => void;
}

export const Modal: FC<ModalProps> = ({ children, setActive }) => {
  return (
    <div>
      <div className= "overlay"></div>
      <div className="modal">
        <div className="close" onClick={() => setActive(false)}></div>
        {children}
      </div>
    </div>
  );
};
