import React, { FC } from 'react';
import './modal.css';

interface ModalProps {
  children?: JSX.Element,
  setActive?: Function
}

export const Modal: FC<ModalProps> = ({ children, setActive}) => {
  return <div>
            <div className = "overlay"></div>
            <div className="modal active">
              <div className="close" onClick = {() => setActive(false)}></div>
              {children}
            </div>
        </div>
};

