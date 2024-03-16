import React, { CSSProperties, FC, useEffect, useLayoutEffect, useState } from 'react';
import './cropped.css';

export interface CroppedProps {
  opened?: boolean;
  rows?: number;
  children?: string;
  length?: number;
}

export const Cropped: FC<CroppedProps> = ({ children, rows, length, opened }) => {
  const [row, setRowCount] = useState(rows);
  const [rowLength, setRowLength] = useState(length);

  useEffect(() => {
    setRowLength(length);
    setRowCount(rows);
  }, [rows, length]);

  function getTextRows(): Array<JSX.Element> {
    const res: Array<JSX.Element> = [];
    const massive = children.split('');
    let lineText = '';
    let array: Array<string> = [];

    if (row <= 0) {
      setRowCount(1);
    }

    if (rowLength <= 0) {
      setRowLength(1);
    }

    if (rowLength > 55) {
      setRowLength(55);
    }

    for (let i = 0; i < massive.length; i++) {
      lineText += massive[i];
      if (lineText.length >= rowLength || i == massive.length - 1) {
        array = [...array, lineText];
        lineText = '';
      }
    }

    if (opened) {
      if (array.length < row) {
        setRowCount(array.length);
      }

      if (array.length >= row) {
        for (let i = 0; i < row; i++) {
          if (array.length != row && i == row - 1) {
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

    return res;
  }

  return (
    <div className={'dialog'}>
      <div className={'content'}>{getTextRows().map((x) => x)}</div>
    </div>
  );
};
