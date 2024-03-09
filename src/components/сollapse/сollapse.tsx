import React, { FC, useLayoutEffect, useState } from 'react';
import './сollapse.css';

export interface CollapseProps {
  opened?: boolean;
  children?: string;
}

export const Collapse: FC<CollapseProps> = ({ children, opened }) => {
  const [child, setChild] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>(null);
 
  useLayoutEffect(() => {
    if (opened) {
      if(timer != null){
        clearTimeout(timer)
        setTimer(null)
      }
      setChild(true);
    } else {
      setTimer(setTimeout(() => {
        setChild(false);
      }, 1000));
    }
  }, [opened]);

  return (
    <div className={'dialog'}>
      <div className={opened ? 'content normal' : 'content сollapse'}>{child ? React.createElement('div', {}, children) : null }</div>
    </div>
  );
};
