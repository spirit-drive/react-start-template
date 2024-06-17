import {v4 as uuidv4} from 'uuid';

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
interface Category {
    id: string
    name: string
    photo?: string
}

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
 **/

interface Product {
    id: string
    name: string
    photo: string
    desc?: string
    createdAt: string
    oldPrice?: number
    price: number
    category: Category
}

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
 **/
interface Cost {
    type: 'Cost'
    id: string
    name: string
    desc?: string
    createdAt: string
    amount: number
    category: Category
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
 **/
interface Profit {
    id: string
    name: string
    desc?: string
    createdAt: string
    amount: number
    category: Category
    type: 'Profit'
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// Случайный выбор из массива
const categories: Category[] = [
    {id: '1', name: 'Electronics'},
    {id: '2', name: 'Books'},
    {id: '3', name: 'Clothing'},
    {id: '4', name: 'Toys'}
];
const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

// Генерация случайного числа в диапазоне
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для создания случайного продукта
export const createRandomProduct = (createdAt: string): Product => {
    const id = uuidv4();
    const name = `Product ${getRandomNumber(1, 100)}`;
    const photo = `https://example.com/photos/${getRandomNumber(1, 100)}.jpg`;
    const desc = `Description for ${name}`;
    const oldPrice = getRandomNumber(50, 100);
    const price = getRandomNumber(20, 50);
    const category = getRandomElement(categories);

    return {
        id,
        name,
        photo,
        desc,
        createdAt,
        oldPrice,
        price,
        category
    };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export type Operation = Cost | Profit;
export const createRandomOperation = (createdAt: string): Operation => {
    const id = uuidv4();
    const name = `Operation ${getRandomNumber(1, 100)}`;
    const desc = `Description for ${name}`;
    const amount = getRandomNumber(20, 200);
    const category = getRandomElement(categories);
    const isCost = Math.random() < 0.5;

    if (isCost) {
        return {
            id,
            name,
            desc,
            createdAt,
            amount,
            category,
            type: 'Cost'
        };
    } else {
        return {
            id,
            name,
            desc,
            createdAt,
            amount,
            category,
            type: 'Profit'
        };
    }
};