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

export const createRandomProduct = (createdAt: string): Product => {
  const names: string[] = ['Смартфон', 'Телевизор', 'Хлеб', 'Мышка', 'Рулет', 'Пакет', 'Шоколад'];
  const categories: Category[] = [
    {
      id: 'food',
      name: 'Еда',
      photo: 'eda.png',
    },
    {
      id: 'tech',
      name: 'Техника',
      photo: 'tech.png',
    },
    {
      id: 'others',
      name: 'Прочее',
    },
  ];
  const id: number = Math.random() * 1000;
  const name: string = names[Math.random() * names.length - 1];
  const category: Category = categories[Math.random() * categories.length - 1];
  const isDesc: boolean = Math.random() * 100 > 50;
  const isOldPrice: boolean = Math.random() * 100 > 50;
  const desc = isDesc ? 'Описание' : undefined;
  const oldPrice = isOldPrice ? Math.random() * 10000 : undefined;
  const price = Math.random() * 10000;
  const product: Product = {
    id: id.toString(),
    name,
    category,
    photo: id.toString() + '.png',
    desc,
    createdAt,
    price,
    oldPrice,
  };

  return product;
};

export const createRandomOperation = (createdAt: string) => {
  const names: string[] = ['Покупка телефона', 'Зарплата', 'Подарок', 'ЖКХ', 'Пропитание', 'Одежда'];
  const categories: Category[] = [
    {
      id: 'food',
      name: 'Еда',
      photo: 'eda.png',
    },
    {
      id: 'tech',
      name: 'Техника',
      photo: 'tech.png',
    },
    {
      id: 'others',
      name: 'Прочее',
    },
  ];
  const name: string = names[Math.random() * names.length - 1];
  const id: number = Math.random() * 1000;
  const isProfit: boolean = Math.random() * 100 > 50;
  const type = isProfit ? 'Profit' : 'Cost';
  const isDesc: boolean = Math.random() * 100 > 50;
  const desc = isDesc ? 'Описание' : undefined;
  const category: Category = categories[Math.random() * categories.length - 1];
  const amount = Math.random() * 10000;
  const operation: Operation = {
    id: id.toString(),
    name,
    type,
    desc,
    createdAt,
    category,
    amount,
  };
  return operation;
};
