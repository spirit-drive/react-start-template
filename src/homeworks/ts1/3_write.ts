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

type Category = {
  id: string;
  name: string;
  photo?: string;
};

interface Product {
  id: string;
  name: string;
  photo: string;
  createdAt: string;
  price: number;
  category: Category;
  desc?: string;
  oldPrice?: number;
}

const randomValue = {
  products: {
    nameList: [
      'Fresh Bread',
      'Milk Butter',
      'Paracorde Knife',
      'Nokia 3110',
      'HP EliteBook 14',
      'AudioTechnica Model 1',
      'Watermelon baby',
    ],
    photoList: [
      'breadPic.dev',
      'https://images.unsplash.com/photo-1701964619678-36b35865e238',
      'pictures.io/picture1.png',
      'random.dev/waterMelon_Photo',
      'smartphoneImage.png',
    ],
    price: ['1000', '900', '7000', '250', '400', '120', '10230'],
    oldPrice: ['999', '879', '6998', '249', '119', '399', '10229'],
    category: {
      nameList: ['Smartphone', 'Laptop', 'Knife', 'Vegetables', 'Headphones', 'Bread', 'Butter'],
      photoList: ['smartphone/img1', 'laptop/img1', 'knife/img1', 'vegetables/img1', 'bread/img1'],
    },
    desc: ['decrtiption_1', 'decrtiption_2', 'decrtiption_3', 'decrtiption_4', 'decrtiption_5'],
  },
  operations: {
    name: ['Cost', 'Profit'],
    desc: ['CostDesc_1', 'ProfitDesc_2', 'CostDesc_3', 'ProfitDesc_4'],
    amount: ['1', '2', '3', '4', '5'],
    category: {
      nameList: ['NameCategoryCost_1', 'NameCategoryProfit_2', 'NameCategoryCost_3', 'NameCategoryProfit_4'],
      photoList: ['cost_1/img1', 'profit_2/img1', 'cost_3/img1', 'profit_4/img1', 'cost_5/img1'],
    },
  },
};

const createRandomId = (): string => {
  return `id_${Math.random().toString().slice(8)}`;
};

const pickRandomValue = (arr: Array<number> | Array<string>): number | string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: createRandomId(),
    name: pickRandomValue(randomValue.products.nameList) as string,
    photo: pickRandomValue(randomValue.products.photoList) as string,
    createdAt: createdAt,
    price: pickRandomValue(randomValue.products.price) as number,
    category: {
      id: createRandomId(),
      name: pickRandomValue(randomValue.products.category.nameList) as string,
      photo: pickRandomValue(randomValue.products.category.photoList) as string,
    },
    desc: pickRandomValue(randomValue.products.desc) as string,
    oldPrice: pickRandomValue(randomValue.products.oldPrice) as number,
  };
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

const selectedRandomOperation = (): 'Cost' | 'Profit' => (Math.random() < 0.5 ? 'Cost' : 'Profit');

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: createRandomId(),
    name: pickRandomValue(randomValue.operations.name) as string,
    desc: pickRandomValue(randomValue.operations.desc) as string,
    createdAt: createdAt,
    amount: pickRandomValue(randomValue.operations.amount) as number,
    category: {
      id: createRandomId(),
      name: pickRandomValue(randomValue.operations.category.nameList) as string,
      photo: pickRandomValue(randomValue.operations.category.photoList) as string,
    },
    type: selectedRandomOperation(),
  };
};
