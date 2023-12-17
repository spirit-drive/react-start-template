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
  id: string,
  name: string,
  photo?: string
};
type Product = {
  id: string,
  name: string,
  photo: string,
  desc?: string,
  createdAt: string,
  oldPrice?: number,
  price: number,
  category: Category
};
type Operation = Cost | Profit;
type Cost = {
  id: string,
  name: string,
  desc?: string,
  createdAt: string,
  amount: number,
  category: Category
  type: 'Cost'
};
type Profit = {
  id: string,
  name: string,
  desc?: string,
  createdAt: string,
  amount: number,
  category: Category
  type: 'Profit'
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
const categoryArr:Category[] = [
  {
    id: '1',
    name: 'cat1',
    photo: 'url1'
  },
  {
    id: '2',
    name: 'cat2',
    photo: 'url2'
  },
  {
    id: '3',
    name: 'cat3',
    photo: 'url3'
  },
  {
    id: '4',
    name: 'cat4',
    photo: 'url3'
  }
];
const randRecord = (max:number, min:number = 0):number => (Math.floor(Math.random() * max) + min);
const randCategoryId:number = randRecord(categoryArr.length, 1);
const category:Category = categoryArr.filter(cat => cat.id === randCategoryId.toString())[0];

export const createRandomProduct = (createdAt: string):Product => {
  const productName = ['Product 1','Product 2','Product 3','Product 6','Product 4'];
  const productPhoto = ['urlPr1','urlPr2','urlPr3','urlPr4'];
  const productDesc = ['description1', 'description4', 'description5', 'description2'];

  return {
    id: Math.floor(Math.random() * 100).toString(),
    name: productName[randRecord(productName.length)],
    photo: productPhoto[randRecord(productPhoto.length)],
    desc: productDesc[randRecord(productDesc.length)],
    createdAt: createdAt,
    oldPrice: Math.floor(Math.random() * 1000),
    price: Math.floor(Math.random() * 1000),
    category: category
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string):Operation => {
  const operationName:string[] = ['Operation 1','Operation 2','Operation 3','Operation 6','Operation 4'];
  const operationDesc:string[] = ['description1', 'description4', 'description5', 'description2'];
  const amount:number = Math.floor(Math.random() * 1000);
  const operation = amount > 600 ? 'Profit' : 'Cost';

  return {
    id: Math.floor(Math.random() * 100).toString(),
    name: operationName[randRecord(operationName.length)],
    desc: operationDesc[randRecord(operationDesc.length)],
    createdAt: createdAt,
    amount: amount,
    category: category,
    type: operation
  }
};
