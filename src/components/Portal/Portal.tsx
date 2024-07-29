import { FC, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<IPortal> = ({ children, container = document.body }): ReactPortal => {
  return createPortal(children, container);
};
