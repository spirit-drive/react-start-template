import React, { FC, ReactElement } from 'react';
import cn from 'classnames';
import './ModalWindow.scss';
import { Navigate} from 'react-router-dom';

export type TypeModal = {
  visible: boolean;
  children?: React.ReactNode;
  onCloseModalWindow?: (visible: boolean) => void;
  token?: string;
};

export const ModalWindow: FC<TypeModal> = ({ visible = false, onCloseModalWindow, children, token }): ReactElement => {
  if(!token){
    return <Navigate to="/auth"/>
  }
  return (
    <div className={cn('modal', { open: visible })}>
      <div className="box">
        <button className="box__close-btn" onClick={() => onCloseModalWindow(false)}>
          <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z"
              fill="#333333"
            />
            <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
