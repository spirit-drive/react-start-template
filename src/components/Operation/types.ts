import { Category } from '../Product/types';

export type Operation = {
  /** Уникальный идентификатор операции */
  id: number;

  /** Название операции */
  name: string;

  /** Описание операции */
  desc: string;

  /** Дата постановки на учёт. (Дата создания записи в базе данных) */
  createAt: string;

  /** Сумма операции */
  amount: number;

  /** Категория, к которой относится операция */
  category: Category;

  /** Тип операции. Доход/Расход */
  type: string;
};
