import React from 'react';

import './card.css';
import { Btn } from '../Btn/Btn';

interface CardProps {
  /** Категория */
  categoryName: 'Транспорт' | 'Продукты';
  /** Заголовок */
  title: string;
  /** Цена */
  price: number;
  /** Описание */
  description: string;
  /** Дата */
  date: string;
}

/**
 * Компонент "Карточка с полным отображением операции"
 */
export const Card = ({ categoryName, title, price, description, date }: CardProps): React.ReactElement => (
  <article className="card">
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
      <p>{price}₽</p>
    </header>
    <p>{description}</p>
    <footer className="flex">
      <p>{date}</p>
      <Btn text="Редактировать" onClick={() => console.log('Ты редактируешь')} isDisabled />
    </footer>
  </article>
);
