/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

export type IdName = {
  id: string;
  name: string;
};

export type Category = IdName & {
  photo?: string;
};

export type Record = IdName & {
  desc?: string;
  createdAt: string;
  category: Category;
};

export type Product = Record & {
  photo: string;
  oldPrice?: number;
  price: number;
};

export type CostType = 'Cost';
export type ProfitType = 'Profit';
export const CostConst: CostType = 'Cost';
export const ProfitConst: ProfitType = 'Profit';
export type OperationType = CostType | ProfitType;

export type Operation = Record & {
  id: string;
  amount: number;
  type: OperationType;
};

export type Cost = Operation & {
  type: CostType;
};

export type Profit = Operation & {
  type: ProfitType;
};

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
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: 'id_' + createdAt,
    name: 'name_' + createdAt,
    category: { id: '1', name: 'Default' },
    createdAt: createdAt,
    photo: 'photo_' + createdAt,
    desc: 'desc_' + createdAt,
    price: 1,
    oldPrice: 2,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: 'id_' + createdAt,
    name: 'name_' + createdAt,
    category: { id: '1', name: 'Default' },
    createdAt: createdAt,
    desc: 'desc_' + createdAt,
    amount: 3,
    type: CostConst,
  };
};
