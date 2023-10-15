import axios from 'axios';

/*
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 */

/** CommonWrite - общий тип */
type CommonWrite = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  category: Category;
};

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

/** Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

type Product = {
  photo: string;
  oldPrice?: number;
  price: number;
} & CommonWrite;

/** Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */

type Cost = {
  amount: number;
  type: 'Cost';
} & Omit<CommonWrite, 'photo'>;

/** Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 */

type Profit = {
  amount: number;
  type: 'Profit';
} & Omit<CommonWrite, 'photo'>;

/** Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit) */
type Operation = Cost | Profit;

type TApiToProduct = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

export const CreateRandomProduct = (createdAt: string): Promise<unknown | Product> => {
  return axios({ method: 'GET', baseURL: 'https://fakestoreapi.com/products/', url: createdAt }).then(({ data }) => {
    const { id, title, image, description, price, category } = data as TApiToProduct;

    return {
      id,
      name: title,
      photo: image,
      desc: description,
      createdAt: new Date().toLocaleDateString('en-US'),
      oldPrice: price * 1.2,
      price,
      category,
    };
  });
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

export const CreateRandomOperation = (createdAt: string): Promise<unknown | Operation> => {
  return axios({ method: 'GET', baseURL: 'https://fakestoreapi.com/products/', url: createdAt }).then(({ data }) => {
    const { id, title, description, price, category } = data as TApiToProduct;

    return {
      amount: price,
      type: ['Cost', 'Profit'][Math.floor(Math.random() * 2)],
      id,
      name: title,
      category,
      desc: description,
      createdAt: new Date().toLocaleDateString('en-US'),
    };
  });
};

export default { CreateRandomProduct, CreateRandomOperation };
