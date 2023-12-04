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

type Category = {
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

/**
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

type TOperation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

type Cost = TOperation & {
  type: 'Cost';
};

type Profit = TOperation & {
  type: 'Profit';
};

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const categories = ['Electronics', 'Clothing', 'Home', 'Sports', 'Beauty'];

const productNames = ['GlamGlow', 'TrekMasters', 'HomeBliss', 'ChicStyle', 'PixelView'];

const operationNames = ['Shop', 'Splurge', 'Wonderland', 'Fling', 'School'];

export const createRandomProduct = (createdAt: string): Product => ({
  category: {
    id: Math.round(Math.random() * 10 ** 5).toString(),
    name: categories[Math.floor(Math.random() * 5)],
  },
  id: Math.round(Math.random() * 10 ** 5).toString(),
  name: productNames[Math.floor(Math.random() * 5)],
  createdAt,
  price: Math.round(Math.random() * 10 ** 3),
  photo: `productPhoto-${Math.floor(Math.random() * 5)}.jpg`,
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => ({
  createdAt,
  type: Math.random() > 0.5 ? 'Cost' : 'Profit',
  id: Math.round(Math.random() * 10 ** 5).toString(),
  name: operationNames[Math.floor(Math.random() * 5)],
  desc: 'The quick brown fox jumps over the lazy dog, barking loudly.',
  amount: Math.round(Math.random() * 10 ** 3),
  category: {
    id: Math.round(Math.random() * 10 ** 5).toString(),
    name: categories[Math.floor(Math.random() * 5)],
  },
});
