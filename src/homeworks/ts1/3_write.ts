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

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

const productList: string[] = [
  'meat',
  'beef',
  'pork',
  'veal',
  'lamb,mutton',
  'beefsteak',
  'roast beef',
  'ground beef',
  'hamburger',
  'spare rib',
  'pork chop',
  'lamb chop',
  'veal',
  'cutlet',
  'ham',
  'bacon',
  'pastrami',
  'corned beef',
  'sausage',
  'salami',
  'smoked sausage',
  'Bologna',
  'hot dogs',
  'link sausages',
  'frankfurters',
  'wieners',
];

export const createRandomProduct = (createdAt: string): Product => {
  const randomProductId: string = Math.floor(Math.random() * 100)
    .toString()
    .slice(-4);
  const randomProductPrice: number = Math.floor(Math.random() * 100);
  const randomCategoryId: string = Math.floor(Math.random() * 100)
    .toString()
    .slice(-4);
  const randomId: number = Math.floor(Math.random() * productList.length);
  return {
    id: randomProductId,
    name: productList.splice(randomId, 1)[0],
    photo: 'product_photo_' + randomProductId,
    createdAt: createdAt,
    price: randomProductPrice,
    category: {
      id: randomCategoryId,
      name: 'category_' + randomCategoryId,
      photo: 'category_photo_' + randomCategoryId,
    },
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

export const createRandomOperation = (createdAt: string) => {
  const randomOperationId: string = Math.floor(Math.random() * 100)
    .toString()
    .slice(-4);
  const randomOperationAmout: number = Math.floor(Math.random() * 1000);
  const randomCategoryId: string = Math.floor(Math.random() * 100)
    .toString()
    .slice(-4);

  return {
    id: randomOperationId,
    name: 'operation_' + randomOperationId,
    createdAt: createdAt,
    amount: randomOperationAmout,
    category: {
      id: randomCategoryId,
      name: 'category_' + randomCategoryId,
      photo: 'photo_' + randomCategoryId,
    },
    type: randomOperationAmout > 500 ? 'Cost' : 'Profit',
  };
};
