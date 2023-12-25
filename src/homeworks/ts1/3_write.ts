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
 **/
export type Category = {
    id: string,
    name: string,
    photo?: string
}
/**
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
export type Product = {
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

interface IOperation {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
  }
  
  interface ICost extends IOperation {
    type: 'Cost'
  }
  
  interface IProfit extends IOperation {
    type: 'Profit'
  }
  
  export type Operation = Cost | Profit;
  export type Cost = ICost;
  export type Profit = IProfit;


/**
 * 
 * 
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};



export const createRandomProduct = (createdAt: string): Product {
    return {
      id: generateId(),
      name: generateProductName(),
      photo: getArgOrNull(`/img/${Math.floor(1000 * Math.random())}.png`),
      desc: getArgOrNull(`description ${Math.floor(Math.random() * Date.now()).toString(36)}`),
      createdAt: createdAt,
      oldPrice: getArgOrNull(getRandomInteger(1000) * 10),
      price: getRandomInteger(1000) * 10,
      category: getRandomCategory()
    }
  };
  
  const generateId = (): string => {
    return ('0000' + getRandomInteger(1000)).slice(-4);
  }
  
  const generateProductName = (): string => {
    return [
      getRandomItem(['White', 'Black', 'Green', 'Yellow', 'Red', 'Blue', 'Pink', 'Purple']),
      getRandomItem(['BMW', 'KIA', 'FORD', 'HUNDAI', 'AUDI', 'MITSUBISHI', 'VAZ', 'RENAULT']), 
      getRandomInteger(15).toString(), 
      
    ].join(' ');
  }
  
  const getRandomCategory = (): Category => {
    return getRandomItem([{ id: '1', name: 'New' }, { id: '2', name: 'Used' }, { id: '3', name: 'Restored' }]);
  }
  
  const getArgOrNull = <T>(arg: T, probability = 2): T | undefined => {
    return (getRandomInteger(probability) !== 1) ? arg : undefined;
  }
  
  const getRandomItem = <T>(arr: Array<T>): T => {
    return arr[getRandomInteger(arr.length)];
  }
  
  const getRandomInteger = (max = 1000): number => {
    return Math.floor(max * Math.random());
  }
  


/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
export const createRandomOperation = (createdAt: string): Operation => {
  const operation: 'Cost' | 'Profit'= getRandomItem(['Cost', 'Profit']);

  return {
    id: generateId(),
    name: operation + generateProductName(),
    desc: getArgOrNull(`description ${Math.floor(Math.random() * Date.now()).toString(36)}`),
    createdAt: createdAt,
    amount: Math.floor(1000 * Math.random()) * 10,
    category: getRandomCategory(),
    type: operation
  }
};