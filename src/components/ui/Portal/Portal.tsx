import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { PopupWrapper } from '../../PopupWrapper/PopupWrapper';

const root = document.querySelector('body');

export interface IPortalProps {
  className?: string;
  children?: React.ReactNode;
  visible: boolean;
  closePortal: () => void;
}

export const Portal: FC<IPortalProps> = ({ children, visible, closePortal }) => {
  return root
    ? ReactDOM.createPortal(
        <PopupWrapper close={() => closePortal()} visible={visible}>
          {children}
        </PopupWrapper>,
        root
      )
    : null;
};
