import React, { CSSProperties, FC, useEffect, useLayoutEffect, useState } from 'react';
import './cropped.css';

export interface CroppedProps {
  opened?: boolean;
  rows?: number;
  children?: string;
  length?: number;
}

export const Cropped: FC<CroppedProps> = ({ children, rows, length, opened }) => {
  const [text, setText] = useState<Array<JSX.Element>>([]);

  useLayoutEffect(() => {
    const res = [];
    const massive = children.split('');
    let lineText = '';
    let array: Array<string> = [];

    if (rows <= 0) {
      rows = 1;
    }
    if (length <= 0) {
      length = 1;
    }
    if (length > 55) {
      length = 55;
    }
    for (let i = 0; i < massive.length; i++) {
      lineText += massive[i];
      if (lineText.length >= length || i == massive.length - 1) {
        array = [...array, lineText];
        lineText = '';
      }
    }

    if (opened) {
      if (array.length < rows) {
        rows = array.length;
      }

      if (array.length >= rows) {
        for (let i = 0; i < rows; i++) {
          if (array.length != rows && i == rows - 1) {
            array[i] += '...';
          }

          res.push(React.createElement('div', { key: i }, array[i]));
        }
      }
    } else {
      if (array.length > 1) {
        array[0] += '...';
      }
      res.push(React.createElement('div', { key: 1 }, array[0]));
    }
    setText(res);
  }, [opened, rows, length, children]);

  return (
    <div className={'dialog'}>
      <div className={'content'}>{text.map((x) => x)}</div>
    </div>
  );
};
