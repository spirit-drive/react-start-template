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
 */

type CategoryT = {
  id: string;
  name: string;
  photo?: string;
};

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

type ProductT = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: CategoryT;
};

/** Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
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

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: CategoryT;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: CategoryT;
  type: 'Profit';
};

type OperationT = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

/** Рандомное целое число */
const randomizeInteger = (min: number, max: number): number => {
  return min + Math.floor((max - min + 1) * Math.random());
};

/** Генератор категории */
const categoryGen = (id: number): CategoryT => ({
  id: id.toString(),
  name: `Продукт #${id}`,
  photo: id % 2 ? `assets/category/${id}.png` : undefined,
});

export const createRandomProduct = (createdAt: string): ProductT => {
  const r_id = randomizeInteger(1, 100);
  const r_price = r_id * 999;
  const r_category = categoryGen(r_id);
  const r_product: ProductT = {
    id: r_id.toString(),
    name: `Продукт №${r_id}`,
    photo: `assets/products/${r_id}.png`,
    desc: r_id % 2 ? `Только сегодня скидка на продукт №${r_id}` : undefined,
    createdAt: createdAt,
    oldPrice: (r_id % 2) + 199,
    price: r_price,
    category: r_category,
  };

  return r_product;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): OperationT => {
  const r_id = randomizeInteger(1, 100);
  const r_category = categoryGen(r_id);
  const r_type = r_id % 2 ? 'Profit' : 'Cost';

  const r_operation: OperationT = {
    id: r_id.toString(),
    name: `Операция №${r_id}`,
    desc: r_id % 2 ? `Операция №${r_id} выполнена` : undefined,
    createdAt: createdAt,
    amount: r_id + 50,
    category: r_category,
    type: r_type,
  };

  return r_operation;
};
