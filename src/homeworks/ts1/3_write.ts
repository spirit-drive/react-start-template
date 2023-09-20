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

const categories: Category[] = [
  { id: '1', name: 'Автомобили', photo: './photo/categories/cars.png' },
  { id: '2', name: 'Мотоциклы', photo: './photo/categories/Motorcycles.png' },
  { id: '3', name: 'Велосипеды', photo: './photo/categories/Bicycles.png' },
];

/* Продукт (Product) содержит
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

/* Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */
type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: string;
};

/* Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: string;
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const products: Product[] = [
    {
      id: '1',
      name: 'BMW',
      photo: './photo/products/bmw.png',
      desc: 'Автомобиль BMW',
      createdAt: createdAt,
      oldPrice: 8500000,
      price: 9580000,
      category: categories[0],
    },
    {
      id: '2',
      name: 'Harley-Davidson',
      photo: './photo/products/harley-devidson.png',
      desc: 'Мотоцикл Harley-Davidson',
      createdAt: createdAt,
      oldPrice: 2970000,
      price: 3100000,
      category: categories[1],
    },
    {
      id: '3',
      name: 'Pinarello',
      photo: './photo/products/pinarello.png',
      desc: 'Шоссейный велосипед PINARELLO',
      createdAt: createdAt,
      oldPrice: 175000,
      price: 190000,
      category: categories[2],
    },
  ];

  return products[Math.floor(Math.random() * products.length)];
};

for (let i = 0; i < 10; i++) {
  console.log(createRandomProduct(String(new Date())));
}

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Cost | Profit => {
  const operations: Array<Cost | Profit> = [
    {
      id: '1',
      name: 'Купил автомобиль BMV',
      desc: 'Получил скидку у поставщика',
      createdAt: createdAt,
      amount: 9580000,
      category: categories[0],
      type: 'Cost',
    },
    {
      id: '2',
      name: 'Продал мотоцикл Harley-Davidson',
      desc: 'Покупатель долго упрашивал',
      createdAt: createdAt,
      amount: 3100000,
      category: categories[1],
      type: 'Profit',
    },
    {
      id: '3',
      name: 'Купил дочери Шоссейный велосипед PINARELLO',
      desc: 'Была безумно рада',
      createdAt: createdAt,
      amount: 3100000,
      category: categories[2],
      type: 'Cost',
    },
  ];

  return operations[Math.floor(Math.random() * operations.length)];
};

for (let i = 0; i < 10; i++) {
  console.log(createRandomOperation(String(new Date())));
}
