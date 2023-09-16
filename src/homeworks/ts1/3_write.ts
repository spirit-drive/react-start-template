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
 * */

interface Category {
  id: string;
  name: string;
  photo?: string;
}

/**
 *
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
 * */

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
 * */

type Operation = Cost | Profit;

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */

interface Cost {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
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
 * */

interface Profit {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
}

// массивы с данными для обеих функций:
const productNames = [
  'Starfield',
  'The Sims 4',
  'FIFA23',
  'Mortal Combat',
  'Sonic',
  'Fortnite',
  'Spider-Man',
  'The Last of us',
  'God of war',
  'Demon Slayer',
];
const productCategory = [
  'Action',
  'Adventure',
  'Detective',
  'Fantasy',
  'Horror',
  'MMORPG',
  'RPG',
  'Shooter',
  'Strategy',
  'Visual novel',
];

const productPrices = [3500, 2100, 1500, 4300, 4900];

const costsNames = [
  'rent',
  'transportation',
  'food',
  'cell phone',
  'travel',
  'pet food',
  'clothing',
  'health insurance',
  'entertainment',
  'emergency fund',
];

const profitsNames = ['rental', 'salary', 'investment', 'bank deposit', 'cashback'];

// вспомогательные функции (получение рандомного числа, равного индексу массива, и получение рандомного id):
function createRndmNum(array: string[] | number[]): number {
  return Math.floor(Math.random() * array.length);
}

function createRndmID(): string {
  return (Math.random() * 10000).toString(16);
}
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct = (createdAt: string): Product => {
  const productName = productNames[createRndmNum(productNames)];
  const photoName = `${productName.toLowerCase().replace(/ /g, '-')}.jpg`;

  return {
    id: createRndmID(),
    name: productName,
    photo: photoName,
    desc: `this is product called ${productName}`,
    createdAt,
    oldPrice: productPrices[createRndmNum(productPrices)] - 500,
    price: productPrices[createRndmNum(productPrices)],
    category: {
      id: createRndmID(),
      name: productCategory[createRndmNum(productCategory)],
    },
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (createdAt: string): Operation => {
  const rndmNum = Math.floor(1 + Math.random() * 2);
  if (rndmNum === 1) {
    const costName = costsNames[createRndmNum(costsNames)];
    return {
      id: createRndmID(),
      name: costName,
      desc: `this is cost called ${costName}`,
      createdAt,
      amount: Math.floor(Math.random() * 4000) + 1,
      category: {
        id: createRndmID(),
        name: 'Finances',
      },
      type: 'Cost',
    } as Cost;
  } else {
    const profitName = profitsNames[createRndmNum(profitsNames)];
    return {
      id: createRndmID(),
      name: profitName,
      desc: `this is profit called ${profitName}`,
      createdAt,
      amount: Math.floor(Math.random() * 4000) + 1,
      category: {
        id: createRndmID(),
        name: 'Finances',
      },
      type: 'Profit',
    } as Profit;
  }
};
