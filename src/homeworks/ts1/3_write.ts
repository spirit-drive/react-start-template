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

export type TCategory = {
  id: string;
  name: string;
  photo?: string;
};

export type TProduct = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: TCategory;
};

enum TOperationType {
  PROFIT = 'Profit',
  COST = 'Cost',
}

type TCommon = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: TCategory;
};

export type TCost = TCommon & {
  type: TOperationType.COST;
};

export type TProfit = TCommon & {
  type: TOperationType.PROFIT;
};
export type TOperation = TCost | TProfit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): TProduct => ({
  createdAt,
  id: 'id',
  name: 'name',
  photo: 'photo',
  desc: 'desc',
  oldPrice: 321,
  price: 123,
  category: {
    id: 'id',
    name: 'name',
    photo: 'photo',
  },
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): TOperation => ({
  createdAt,
  id: 'id',
  name: 'name',
  desc: 'desc',
  amount: 123,
  category: {
    id: 'id',
    name: 'name',
    photo: 'photo',
  },
  type: TOperationType.PROFIT,
});
