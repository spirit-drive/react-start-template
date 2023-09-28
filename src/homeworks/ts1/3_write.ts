/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
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
type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

interface Operation {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}

export interface Cost extends Operation {
  type: 'Cost';
}

export interface Profit extends Operation {
  type: 'Profit';
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
const getRandomId = () => Math.random().toString(26).slice(2);
const getRandomPrice = () => Math.floor(Math.random() * 500) + 100;
const getRandomName = () => `Name_${getRandomId()}`;
const getRandomPhoto = () => `http://dummyimage.com/200x200.png/5fa2dd/ffffff&text=${getRandomId()}`;

const dummyCategory: Category = {
  id: getRandomId(),
  name: getRandomName(),
  photo: getRandomPhoto(),
};

export const createRandomProduct = (createdAt: string): Product => ({
  id: getRandomId(),
  name: getRandomName(),
  photo: getRandomPhoto(),
  desc: 'This is a random product',
  createdAt,
  oldPrice: getRandomPrice(),
  price: getRandomPrice(),
  category: dummyCategory,
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
const getRandomAmount = () => Math.floor(Math.random() * 1000) + 100;
const getRandomType = () => (Math.random() > 0.5 ? 'Cost' : 'Profit');

export const createRandomOperation = (createdAt: string) => {
  const baseOperation: Operation = {
    id: getRandomId(),
    name: getRandomName(),
    desc: 'random desc',
    createdAt,
    amount: getRandomAmount(),
    category: dummyCategory,
  };

  if (getRandomType() === 'Cost') {
    return {
      ...baseOperation,
      type: 'Cost',
    };
  } else {
    return {
      ...baseOperation,
      type: 'Profit',
    };
  }
};
