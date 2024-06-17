//для удобства подключаем рандомные списки и генерацию guid
import { Random } from 'random-js';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  starWars,
  names,
  countries,
} from 'unique-names-generator';


export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

interface IOperation {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}

interface ICost extends IOperation {
  type: 'Cost';
}

interface IProfit extends IOperation {
  type: 'Profit';
}

export type Operation = Cost | Profit;
export type Cost = ICost;
export type Profit = IProfit;

//создание случайного продукта
export const createRandomProduct = (createdAt: string): Product => {
  const productId = getRandomId(); //новый id продукта
  const category = getRandomElement(categories); //получаем категорию
  const price = getRandomNumber(10000); //цена
  return {
    id: productId,
    name: uniqueNamesGenerator(getConfigByCategory(category.name)), //на основе категории , получаем подходящее имя
    photo: `/images/roducts/${productId}.jpg`, //сылка на фото
    createdAt: createdAt,
    oldPrice: price < 4000 ? price * 1.3 : null, //иногда заполняем старую цену
    price: price,
    desc: uniqueNamesGenerator(getConfigByCategory('Description', ' | ')),
    category: category,
  };
};

//создание операции
export const createRandomOperation = (createdAt: string): Operation => {
  const product = createRandomProduct(createdAt);
  return {
    id: getRandomId(),
    name: product.name,
    desc: product.desc,
    createdAt: createdAt,
    amount: product.price,
    category: product.category,
    type: getRandomElement(['Cost', 'Profit']),
  };
};

//список категорий для выбора "случайной"
const categories: Category[] = [
  { id: '1', name: 'People' },
  { id: '2', name: 'Animals' },
  { id: '3', name: 'Country' },
  { id: '4', name: 'Other' },
  { id: '5', name: 'StarWars' },
];

//новый id(guid)
const getRandomId = () => {
  const random = new Random();
  return random.uuid4();
};

// возвращает случайный элемент из переданного списка
const getRandomElement = <T>(array: T[]): T | undefined => {
  const randomIndex = getRandomNumber(array.length);
  return array[randomIndex];
};

const getRandomNumber = (max = 1000): number => {
  return Math.floor(max * Math.random());
};

//формируем название или описание, в зависимости от категории (чтобы избежать абсолютной абракадабры)
export const getConfigByCategory = (name: string, separator: string = ' '): Config => {
  switch (name) {
    case 'People': {
      return { separator: separator, dictionaries: [colors, names] };
    }
    case 'Animals': {
      return { separator: separator, dictionaries: [colors, animals] };
    }
    case 'Country': {
      return { separator: separator, dictionaries: [countries] };
    }
    case 'StarWars': {
      return { separator: separator, dictionaries: [starWars] };
    }
    case 'Description': {
      return { separator: separator, dictionaries: [adjectives, colors, countries] };
    }
    default: {
      return { separator: separator, dictionaries: [adjectives, colors, names] };
    }
  }
};
