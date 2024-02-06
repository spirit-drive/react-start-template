import React, { useLayoutEffect, useState } from 'react';

type CollapseProps = {
  opened: boolean;
  children: React.ReactNode;
};
const Collapse: React.FC<CollapseProps> = ({ opened, children }) => {
  const [height, setHeight] = useState<number | null>(null);
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);
  const [opacity, setOpacity] = useState<number>(0);

  const contentRef = React.createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight || null;
    setHeight(contentHeight);
    return () => {
      setIsTransitionEnd(false);
      setOpacity(0);
    };
  }, [opened, setIsTransitionEnd]);

  const handleTransitionEnd = () => {
    if (!opened) {
      setHeight(null);
      setIsTransitionEnd(false);
    }
    setIsTransitionEnd(true);
    setOpacity(1);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        height: opened ? `${height}px` : '0',
        transition: 'height 0.5s ease',
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        ref={contentRef}
        style={{
          opacity: opacity,
          transition: 'opacity 0.5s ease',
          visibility: isTransitionEnd ? 'visible' : 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
