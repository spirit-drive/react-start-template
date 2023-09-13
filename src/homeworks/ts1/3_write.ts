/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

import React from 'react';
import axios from 'axios';

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

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

type Category = {
  id: string;
  name: string;
  photo?: string;
};

interface CommonWrite {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  category: Category;
}

interface Product extends CommonWrite {
  id: string;
  photo: string;
  oldPrice?: number;
  price: number;
}

interface Cost extends Omit<CommonWrite, 'photo'> {
  amount: number;
  type: 'Cost';
}

interface Profit extends Omit<CommonWrite, 'photo'> {
  amount: number;
  type: 'Profit';
}

type Operation = Cost | Profit;

interface ItransformApiToProduct {
  image: string;
  description: string;
  price: number;
  id: string;
  title: string;
  category: string;
}

const transformApiToProduct = (data: ItransformApiToProduct): Product => {
  return {
    photo: data.image,
    desc: data.description,
    createdAt: new Date().toLocaleDateString('en-US'),
    oldPrice: data.price * 1.2,
    price: data.price,
    id: '11',
    name: data.title,
    category: {
      id: data.id,
      name: data.category,
    },
  };
};

const transformApiToOperation = (data: ItransformApiToProduct): Operation => {
  return {
    id: data.id,
    desc: data.description,
    createdAt: new Date().toLocaleDateString('en-US'),
    amount: 10,
    name: data.title,
    type: 'Cost',
    category: {
      id: data.id,
      name: data.category,
    },
  };
};

export const CreateRandomProduct = (createdAt: string): Product => {
  const [data, setData] = React.useState<ItransformApiToProduct>({
    image: '',
    description: '',
    price: null,
    id: '',
    title: '',
    category: '',
  });

  React.useEffect(() => {
    axios({ method: 'GET', baseURL: 'https://fakestoreapi.com/products/', url: createdAt }).then(({ data }) => {
      setData(data);
    });
  }, [createdAt]);

  return transformApiToProduct(data);
};

export const CreateRandomOperation = (createdAt: string): Promise<void | Operation> => {
  return axios({ method: 'GET', baseURL: 'https://fakestoreapi.com/products/', url: createdAt }).then(({ data }) =>
    console.log(transformApiToOperation(data))
  );
};

export default CreateRandomProduct;
