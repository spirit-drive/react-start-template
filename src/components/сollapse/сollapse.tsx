import React, { FC, useLayoutEffect, useState } from 'react';
import './сollapse.css';

export interface CollapseProps {
  opened?: boolean;
  children?: string;
}

export const Collapse: FC<CollapseProps> = ({ children, opened }) => {
  const [child, setChild] = useState<JSX.Element>();

  useLayoutEffect(() => {
    if (opened) {
      const elem = React.createElement('div', {}, children);
      setChild(elem);
    } else {
      setTimeout(() => {
        setChild(null);
      }, 1000);
    }
  }, [opened]);

  return (
    <div className={'dialog'}>
      <div className={opened ? 'content normal' : 'content сollapse'}>{child}</div>
    </div>
  );
};
