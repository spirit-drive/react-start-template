import React from 'react';

import './tooltip.css';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

enum EHintDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

interface ITooltip {
  /** Разметка цели */
  children: JSX.Element;
  /** Текст тултипа */
  title: string;
  /** Позиция всплывания тултипа */
  direction?: EHintDirection.TOP | EHintDirection.BOTTOM | EHintDirection.LEFT | EHintDirection.RIGHT;
}

/**
 * Компонент "Тултип"
 *
 * В составе имеет две сущности:
 * 1. Цель (target) - то, на что наводим
 * 2. Подсказка (hint) - то, что всплывает
 */

export const Tooltip = ({ children, title, direction = EHintDirection.TOP }: ITooltip): React.ReactElement => {
  /** Признак видимости подсказки */
  const [isHintMount, setIsHintMount] = React.useState<boolean>(false);
  const [isShowHint, setIsShowHint] = React.useState<boolean>(false);

  /** Хендлер "наведения на цель" */
  const onMouseOver = (): void => {
    setIsHintMount(true);
  };

  /** Эфект для плавного появления тултипа */
  React.useLayoutEffect(() => {
    setTimeout(() => {
      isHintMount && setIsShowHint(true);
    }, 200);
    !isHintMount && setIsShowHint(false);
  }, [isHintMount]);

  /** Хендлер при "уходе с цели" */
  const onMouseOut = (): void => {
    setIsHintMount(false);
  };

  /** Реф элемента "Цель" */
  const targetRef = React.useRef<HTMLDivElement>();
  /** Реф элемента "Подсказка" */
  const hintRef = React.useRef<HTMLDivElement>();

  /** Цель
   * Формируется методом "cloneElement"
   * из входящего пропа children,
   * с добавлением необходимых пропов и атрибутов
   */
  const target = React.cloneElement(children, {
    style: { display: 'inline-block' },
    /** Лейбл для скринридеров */
    'aria-labelledby': title,
    onMouseOut: onMouseOut,
    onMouseOver: onMouseOver,
    ref: targetRef,
  });

  /** Тип для позиционирования подсказки */
  type TPosition = {
    top: string;
    left: string;
  };

  /** Изначальная/получившаяся позиция подсказки */
  const [position, setPosition] = React.useState<TPosition>({
    top: 'auto',
    left: 'auto',
  });

  /** Стейт для формирования новой предопределенной позиции тултипа,
   * если расстояния для вывода тултипа влево или вправо мало
   */
  const [newPos, setNewPos] = React.useState<string | undefined>(undefined);

  /** Эффект для позиционирования подсказки по входящему пропу position компонента */
  React.useLayoutEffect(() => {
    /** Определяем размеры и позицию элемента "Цель" */
    const targetRect = targetRef.current.getBoundingClientRect();
    /** Определяем размеры элемента "Подсказка" */
    const hintRect = isHintMount && hintRef.current.getBoundingClientRect();

    /** Дефолтная позиция - "вверх"
     * Она изначально инициализирована в компоненте
     */
    switch (direction) {
      case 'left':
        setPosition({
          top: `${targetRect.y + (targetRect.height - hintRect.height) / 2}px`,
          left: `${targetRect.left - hintRect.width - 12}px`,
        });
        break;
      case 'right':
        setPosition({
          top: `${targetRect.y + (targetRect.height - hintRect.height) / 2}px`,
          left: `${targetRect.left + targetRect.width + 12}px`,
        });
        break;
      case 'bottom':
        setPosition({
          top: `${targetRect.y + targetRect.height + 8}px`,
          left: `${targetRect.left + (targetRect.width - hintRect.width) / 2}px`,
        });
        break;
      default:
        setPosition({
          top: `${targetRect.y - hintRect.height - 4}px`,
          left: `${targetRect.left + (targetRect.width - hintRect.width) / 2}px`,
        });
        break;
    }

    /** Если расстояние слева от края экрана до элемента в котором подсказка меньше ширины подсказки - размещаем ее вверх */
    if (targetRect.y < hintRect.width && direction === EHintDirection.LEFT) {
      setPosition({
        top: `${targetRect.y - hintRect.height - 4}px`,
        left: `${targetRect.left + (targetRect.width - hintRect.width) / 2}px`,
      });
      setNewPos('top');
    }
    /** Если расстояние справа от края экрана до элемента в котором подсказка меньше ширины подсказки - размещаем ее вниз */
    if (window.innerWidth - (targetRect.y + targetRect.width) < hintRect.width && direction === EHintDirection.RIGHT) {
      setPosition({
        top: `${targetRect.y + targetRect.height + 8}px`,
        left: `${targetRect.left + (targetRect.width - hintRect.width) / 2}px`,
      });
      setNewPos('bottom');
    }
  }, [direction, isHintMount]);

  return (
    <>
      {isHintMount &&
        createPortal(
          <div
            className={clsx(direction, newPos, 'tooltip', isShowHint && 'tooltip-visible')}
            /** Два атрибута ниже для поддержки доступности */
            id={title}
            role="tooltip"
            ref={hintRef}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {title}
          </div>,
          document.querySelector('main')
        )}
      {target}
    </>
  );
};
