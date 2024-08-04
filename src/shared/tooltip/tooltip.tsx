import React, { ReactElement, useRef, useState } from 'react';
import classNames from 'classnames';
import './tooltip.css';

type PropsTooltip = {
  children: ReactElement;
  text: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  displayTime: number;
};

export const ToolTip: React.FC<PropsTooltip> = ({ children, text, position, displayTime }) => {
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEnter = () => {
    refSetTimeout.current = setTimeout(() => {
      setIsVisible(true);
    }, displayTime);
  };

  const onMouseLeave = () => {
    clearTimeout(refSetTimeout.current);
    setIsVisible(false);
  };

  const tooltipClasses = classNames({
    tooltip: true,
    'tooltip-left': position === 'left',
    'tooltip-right': position === 'right',
    'tooltip-top': position === 'top',
    'tooltip-bottom': position === 'bottom',
  });

  return (
    <div className="container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {isVisible && <div className={tooltipClasses}>{text}</div>}
    </div>
  );
};
