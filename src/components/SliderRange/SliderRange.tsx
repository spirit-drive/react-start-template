import clsx from 'clsx';
import React, { FC, useRef, useState } from 'react';
import classNames from './sliderRange.modules.css';

type SliderRangeType = {
  min: number;
  max: number;
};
const SliderRange: FC<SliderRangeType> = ({ min, max }) => {
  const [position, setPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const circleRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const lineRect = lineRef.current?.getBoundingClientRect();
      const offsetX = e.clientX - (lineRect?.left || 0);
      let newPosition = Math.max(min, Math.min(max, (offsetX / (lineRect?.width || 1)) * (max - min)));
      newPosition = Math.round(newPosition);
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePostion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = Number(e.target.value);
    if (newPosition < min) {
      setPosition(min);
    } else if (newPosition > max) {
      setPosition(max);
    }
    setPosition(newPosition);
  };

  return (
    <>
      <div className={clsx(classNames.line)} ref={lineRef} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <span
          ref={circleRef}
          style={{
            left: `calc(${((position - min) / (max - min)) * 100}% - ${20 / 2}px)`,
          }}
          className={clsx(classNames.circle)}
          onMouseDown={handleMouseDown}
        ></span>
      </div>

      <input
        type="number"
        min={min}
        max={max}
        className={clsx(classNames.positionInput)}
        onChange={handlePostion}
        value={position}
      />
    </>
  );
};

export default SliderRange;
