import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import '../UI/Tooltip/tooltip.css';

type Story = StoryObj<typeof meta>;

enum EHintDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

interface ITooltip {
  /** Позиция всплывания тултипа */
  direction: EHintDirection.TOP | EHintDirection.BOTTOM | EHintDirection.LEFT | EHintDirection.RIGHT;
}

const TooltipStoryComponent = ({ direction = EHintDirection.RIGHT }: ITooltip): React.ReactElement => {
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

  /** Стейт для формирования новой предопределенной позиции тултипа,
   * если расстояния для вывода тултипа влево или вправо мало
   */
  const [newPos, setNewPos] = React.useState<string | undefined>(undefined);

  /** Эффект для эмуляции недостаточности места для всплытия подсказки */
  React.useEffect(() => {
    if (direction === EHintDirection.LEFT) setNewPos(EHintDirection.TOP);
  }, [direction]);

  return (
    <div className="tooltip-wrapper" style={{ border: '1px solid', padding: '80px' }}>
      {isHintMount &&
        createPortal(
          <div
            className={clsx(direction, newPos, 'tooltip', isShowHint && 'tooltip-visible')}
            style={{
              top:
                (direction === EHintDirection.RIGHT && '98px') ||
                (direction === EHintDirection.LEFT && '40px') ||
                (direction === EHintDirection.TOP && '40px') ||
                (direction === EHintDirection.BOTTOM && '160px'),
              left:
                (direction === EHintDirection.RIGHT && '342px') ||
                (direction === EHintDirection.LEFT && '64px') ||
                ((direction === EHintDirection.TOP || direction === EHintDirection.BOTTOM) && '64px'),
            }}
          >
            Текст подсказки, всплывающий по наведению
          </div>,
          document.querySelector('.tooltip-wrapper')
        )}
      <div
        style={{ display: 'inline-block', background: '#eee', padding: '20px', cursor: 'pointer' }}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        Элемент в котором подсказка
      </div>
    </div>
  );
};

/**
 * Компонент "Тултип"
 *
 * В составе имеет две сущности:
 * 1. Цель (target) - то, на что наводим
 * 2. Подсказка (hint) - то, что всплывает
 *
 * Позиция всплытия подсказки определяется входящим пропом @direction
 *
 * На странице представлено урезанное демо компонента из-за особеностей сторибука, а именно:
 * - невозможности использовать портал, как в полноценном компоненте, ссылаясь на тег body
 * - ограничения по функции React.cloneElement
 * - невозможность получения getBoundingClientRect от элемента с рефом
 *
 * Полноценную работу тултипа можно посомтреть в проекте
 */

const meta: Meta = {
  title: 'Example/Tooltip',
  component: TooltipStoryComponent,
  argTypes: {
    direction: {
      options: [EHintDirection.TOP, EHintDirection.BOTTOM, EHintDirection.LEFT, EHintDirection.RIGHT],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Tooltip: Story = {};
