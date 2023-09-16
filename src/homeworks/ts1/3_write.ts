/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
import { fa, faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/no-unresolved

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export class Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  price: number;
  category: Category;

  constructor(name: string, photo: string, createdAt: string, price: number, category: Category, desc?: string) {
    this.id = faker.string.uuid();
    this.name = name;
    this.photo = photo;
    this.desc = desc;
    this.price = price;
    this.category = category;
    this.createdAt = createdAt;
  }
}

interface Cost {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
}

interface Profit {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
}

export type Operation = Cost | Profit;

/**
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return new Product(
    'testProduct ' + uuidv4(),
    faker.image.avatar(),
    createdAt,
    faker.number.int({ min: 1000, max: 10000 }),
    { id: uuidv4(), name: 'testCategory' + uuidv4() } as Category,
    faker.lorem.text()
  );
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const operationCost: Cost = {
    id: uuidv4(),
    amount: 2,
    category: { id: uuidv4(), name: 'testCategory' + uuidv4() } as Category,
    createdAt: createdAt,
    name: 'Покупка продукта ' + uuidv4(),
    type: 'Cost',
    desc: 'Описание покупки',
  };

  const operationProfit: Profit = {
    id: uuidv4(),
    amount: 2,
    category: { id: uuidv4(), name: 'testCategory' + uuidv4() } as Category,
    createdAt: createdAt,
    name: 'Пришла аренда за машино-место ' + uuidv4(),
    type: 'Profit',
    desc: 'Описание дохода',
  };

  const operations = [operationCost, operationProfit];
  return operations[Math.floor(Math.random() * operations.length)];
};
