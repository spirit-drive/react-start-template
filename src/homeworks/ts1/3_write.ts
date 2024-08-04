import { v4 } from 'uuid';

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

interface IOperation {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}

interface ICost extends IOperation {
  type: 'Cost';
}

interface IProfit extends IOperation {
  type: 'Profit';
}

export type Operation = Cost | Profit;

export type Cost = ICost;

export type Profit = IProfit;

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getRandomElement = <T>(array: T[]): T | undefined => {
  const randomIndex = getRandomNumber(array.length);
  return array[randomIndex];
};

const categories: Category[] = [
  { id: '1', name: 'Телевизоры' },
  { id: '2', name: 'Телефоны' },
  { id: '3', name: 'Игровые консоли' },
];

// create random product
export const createRandomProduct = (createdAt: string): Product => {
  const productId = v4();
  const category = getRandomElement(categories);
  const price = getRandomNumber(999);
  const name = `${category.name}-${getRandomNumber(100)}`;

  return {
    id: productId,
    name: name,
    photo: `/static/images/products/${productId}.png`,
    createdAt: createdAt,
    oldPrice: price < 4000 ? price * 1.3 : null, //иногда заполняем старую цену
    price: price,
    desc: `Cool description of ${name}`,
    category: category,
  };
};

// create random operation
export const createRandomOperation = (createdAt: string): Operation => {
  const product = createRandomProduct(createdAt);
  return {
    id: v4(),
    name: product.name,
    desc: product.desc,
    createdAt: createdAt,
    amount: product.price,
    category: product.category,
    type: getRandomElement(['Cost', 'Profit']),
  };
};
