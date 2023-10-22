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

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

type TGeneralFields = {
  id: string;
  name: string;
};

type TCategory = TGeneralFields & {
  photo?: string;
};

type TCategoryGeneralFields = {
  desc?: string;
  createdAt: string;
  category: TCategory;
};

type TProduct = TCategory &
  TCategoryGeneralFields & {
    oldPrice?: number;
    price: number;
  };

type TOperationGeneralFields = {
  amount: number;
};

enum EOperation {
  Cost,
  Profit,
}

type TOperation = TCost | TProfit;

type TCost = TGeneralFields &
  TCategoryGeneralFields &
  TOperationGeneralFields & {
    type: EOperation.Cost;
  };

type TProfit = TGeneralFields &
  TCategoryGeneralFields &
  TOperationGeneralFields & {
    type: EOperation.Profit;
  };

export const createRandomProduct = (createdAt: string): TProduct => {
  return {
    id: 'random_string',
    name: 'new product',
    createdAt,
    price: 1000,
    photo: 'photo',
    desc: 'description',
    oldPrice: 2000,
    category: {
      id: 'category',
      name: 'new category',
    },
  };
};

export const createRandomOperation = (createdAt: string): TOperation => {
  return {
    id: 'random_string',
    name: 'new operation',
    createdAt,
    amount: 1,
    desc: 'description',
    type: EOperation.Cost,
    category: {
      id: 'category',
      name: 'new category',
    },
  };
};
