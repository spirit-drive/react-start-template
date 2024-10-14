import React, { FC, useRef, useState, useEffect } from 'react';
import './Slider.scss';

type SliderRangeType = {
  min: number;
  max: number;
  value: number;
  inputIsVisible: boolean;
};
const SliderRange: FC<SliderRangeType> = ({ min, max, value = 0, inputIsVisible = true }) => {
  const [position, setPosition] = useState<number>(value);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setPosition(getPosition(e.clientX));
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition(getPosition(e.clientX));
  };

  const getPosition = (x: number) => {
    const sliderRect = sliderRef.current?.getBoundingClientRect();
    const percentRect = (x - sliderRect?.x || 0) / (sliderRect?.width || 1);
    const newPosition = (max - min) * percentRect + min;
    if (newPosition > max) return max;
    if (newPosition < min) return min;
    return Math.round(newPosition);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPosition = Number(e.target.value);
    if (newPosition < min) {
      newPosition = min;
    } else if (newPosition > max) {
      newPosition = max;
    }
    setPosition(newPosition);
  };

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < 500) {
        sliderRef.current.classList.add('small');
      } else {
        sliderRef.current.classList.remove('small');
      }
    });
    observer.observe(sliderRef.current);
    return () => observer.disconnect();
  });

  return (
    <>
      <div className="slider_track" ref={sliderRef} onClick={handleClick} onMouseDown={handleMouseDown}>
        <span
          className="slider_touch"
          style={{
            left: `${((position - min) / (max - min)) * 100}%`,
          }}
          title={position.toString()}
        ></span>
      </div>
      {inputIsVisible && (
        <input type="number" min={min} max={max} className="positionInput" onChange={handleChange} value={position} />
      )}
    </>
  );
};

export default SliderRange;
