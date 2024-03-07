import { faker } from '@faker-js/faker';

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

interface Category {
  id: string;
  name: string;
  photo?: string;
}

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

interface Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 */

type Operation = Cost | Profit;

interface OperationBase {
  id: string;
  name: string;
  desc: string;
  createdAt: string;
  amount: number;
  category: Category;
}

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */

interface Cost extends OperationBase {
  type: 'Cost';
}

/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 */

interface Profit extends OperationBase {
  type: 'Profit';
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const getImage = (): string => faker.image.urlLoremFlickr({ category: 'fashion' });

const getCategory = (): Category => {
  const categoryName = faker.helpers.arrayElement(['Dresses', 'Skirts', 'Accessories', 'Shoes', 'Bags']);
  return {
    id: faker.string.uuid(),
    name: categoryName,
    ...(faker.datatype.boolean() ? { photo: getImage() } : {}),
  };
};

export const createRandomProduct = (createdAt: string): Product => {
  const category = getCategory();
  const oldPrice = +faker.commerce.price({ min: 980, max: 8900, dec: 0 });

  return {
    id: faker.string.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${category.name}`,
    photo: getImage(),
    ...(faker.datatype.boolean() ? { description: faker.commerce.productDescription() } : {}),
    createdAt,
    ...(faker.datatype.boolean() ? { oldPrice } : {}),
    price: +faker.commerce.price({
      min: oldPrice + 100 || 980,
      max: oldPrice ? oldPrice + oldPrice * 0.5 : 8900,
      dec: 0,
    }),
    category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: faker.string.uuid(),
    name: faker.finance.transactionType(),
    desc: faker.finance.transactionDescription(),
    createdAt,
    amount: +faker.commerce.price({ min: 980, max: 8900, dec: 0 }),
    category: getCategory(),
    type: faker.helpers.arrayElement(['Cost', 'Profit']),
  };
};
