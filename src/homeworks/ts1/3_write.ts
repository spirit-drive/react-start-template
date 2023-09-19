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
 *
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

export type Operation = Cost | Profit;

export type BasicProperties = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

export type Cost = BasicProperties & {
  type: 'Cost';
};

export type Profit = BasicProperties & {
  type: 'Profit';
};
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: '1',
    name: 'xiaomi watch',
    photo: 'url',
    createdAt: createdAt,
    price: 15000,
    category: {
      id: '1234',
      name: 'watches',
    },
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  // const randomOperation: number = Math.floor(Math.random() * 2);

  // switch (randomOperation) {
  //   case 0:
  //     return {
  //       id: '1',
  //       name: 'xiaomi watch',
  //       createdAt: createdAt,
  //       amount: 1,
  //       category: {
  //         id: '1234',
  //         name: 'watches',
  //       },
  //       type: 'Cost',
  //     };
  //   case 1:
  //     return {
  //       id: '1',
  //       name: 'xiaomi watch',
  //       createdAt: createdAt,
  //       amount: 25,
  //       category: {
  //         id: '1234',
  //         name: 'watches',
  //       },
  //       type: 'Profit',
  //     };
  // }

  return (
    {
      id: '1',
      name: 'xiaomi watch',
      createdAt: createdAt,
      amount: 1,
      category: {
        id: '1234',
        name: 'watches',
      },
      type: 'Cost',
    } || {
      id: '1',
      name: 'xiaomi watch',
      createdAt: createdAt,
      amount: 25,
      category: {
        id: '1234',
        name: 'watches',
      },
      type: 'Profit',
    }
  );
};
