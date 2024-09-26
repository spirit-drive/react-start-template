import React, { FC, useMemo, useRef, useState } from 'react';
import './Resizer.scss';

export type Size = { width: number; height: number };

export type ResizerProps = {
  className?: string;
  initWidth: number;
  initHeight: number;
  children: (size: Size) => React.ReactNode;
};

const MIN_SIZE = 32;

export const Resizer: FC<ResizerProps> = ({ className, children, initWidth, initHeight }) => {
  const root = useRef<HTMLDivElement>();
  const [size, setSize] = useState({ width: initWidth, height: initHeight });
  const sizesCopy = useRef(size);
  sizesCopy.current = size;

  const { onMouseDownResizer } = useMemo(() => {
    let start = { x: 0, y: 0, width: MIN_SIZE, height: MIN_SIZE };

    const safeSetSizes = (_size: Size) => {
      setSize({
        width: _size.width < MIN_SIZE ? MIN_SIZE : Math.round(_size.width),
        height: _size.height < MIN_SIZE ? MIN_SIZE : Math.round(_size.height),
      });
    };

    const move = (e: MouseEvent) => {
      e.preventDefault();
      const rect = root.current.getBoundingClientRect();
      const x = start.x - (e.clientX - rect.x);
      const y = start.y - (e.clientY - rect.y);
      safeSetSizes({ width: start.width - x, height: start.height - y });
    };

    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };

    return {
      onMouseDownResizer: (e: React.MouseEvent) => {
        e.stopPropagation();
        const rect = root.current.getBoundingClientRect();
        start = {
          x: e.clientX - rect.x,
          y: e.clientY - rect.y,
          width: sizesCopy.current.width,
          height: sizesCopy.current.height,
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
      },
    };
  }, []);

  return (
    <div ref={root} className="resizer_wrapper" style={{ width: size.width, height: size.height }}>
      <div className="resizer">{children(size)}</div>
      <button type="button" className="resizer_btn" onMouseDown={onMouseDownResizer} />
    </div>
  );
};
