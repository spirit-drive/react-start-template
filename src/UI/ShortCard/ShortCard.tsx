import React, { ButtonHTMLAttributes } from 'react';

import './short-card.css';
import '../../app/App.css';
import { OperationModal } from '../Modal/OperationModal';

export interface IShortCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  categoryName: 'Транспорт' | 'Продукты';
  title: string;
  price: number;
  description: string;
}

/**
 * Компонент "Карточка с кратким отображением операции"
 */
export const ShortCard = ({
  categoryName,
  title,
  price,
  description,
  ...buttonAttrs
}: IShortCard): React.ReactElement => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  return (
    <>
      <article className="card" {...buttonAttrs} onClick={() => setShowEditModal(true)}>
        <header className="flex">
          <div className="flex">
            <div className="category">
              <img
                width="20"
                height="20"
                src={
                  categoryName === 'Транспорт'
                    ? 'https://img.icons8.com/ios-filled/20/5b7cfa/car.png'
                    : 'https://img.icons8.com/ios-filled/20/5b7cfa/fast-moving-consumer-goods.png'
                }
                alt=""
              />
              <span>{categoryName}</span>
            </div>
            <h1>{title}</h1>
          </div>
          <p>
            {price}
            <span>₽</span>
          </p>
        </header>
        <p className="margin-top-8">
          {description.length > 100 ? description.slice(0, 100).slice(0, -3) + '...' : description}
        </p>
      </article>
      <OperationModal title={title} price={price} isOpen={showEditModal} setIsOpen={setShowEditModal} />
    </>
  );
};
