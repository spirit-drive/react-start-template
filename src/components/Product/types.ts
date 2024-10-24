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

//создание случайного продукта
export const generateRandomProduct = (createdAt: string , id:number): Product => {
  const productId = id.toString() //  getRandomId(); //новый id продукта
  const category = getRandomElement(categories); //получаем категорию
  const price = getRandomNumber(10000); //цена
  return {
    id: productId,
    name: uniqueNamesGenerator(getConfigByCategory(category.name)), //на основе категории , получаем подходящее имя
    photo: require(`../../assets/photos/${getRandomNumber(7)}.jpg`), //сылка на фото
    createdAt: createdAt,
    oldPrice: price < 4000 ? price * 1.3 : null, //иногда заполняем старую цену
    price: price,
    desc: uniqueNamesGenerator(getConfigByCategory('Description', ' | ')),
    category: category,
  };
};

//список категорий для выбора "случайной"
const categories: Category[] = [
  { id: '1', name: 'Notebook' },
  { id: '2', name: 'Phone' },
  { id: '3', name: 'Country' },
  { id: '4', name: 'Animals' },
  { id: '5', name: 'StarWars' },
];

//новый id
const getRandomId = (): string => {
  return Math.floor(10000000 * Math.random()).toString();
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
export const getConfigByCategory = (name: string, separator = ' '): Config => {
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

export type TypeProduct = {
  id: number;
  name: string;
  photos: string[];
  desc: string;
  createAt: string;
  oldPrice: number | string;
  price: number;
  category: {
    id: number;
    name: string;
    photo: string;
  };
};
