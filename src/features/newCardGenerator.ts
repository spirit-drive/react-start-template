import { IShortCard } from '../UI/ShortCard/ShortCard';

export const newCardGenerator = (randomNumberIs: number): IShortCard => {
  const category = randomNumberIs % 2 === 0 ? 'Продукты' : 'Транспорт';
  const result: IShortCard = {
    title: category === 'Продукты' ? `Продукт №${randomNumberIs}` : `${category} №${randomNumberIs}`,
    description: `Reprehenderit odio expedita quod nam laboriosam eligendi neque quam ut quaerat. ${category} №${randomNumberIs}`,
    categoryName: category,
    price: randomNumberIs * 100,
  };

  return result;
};
