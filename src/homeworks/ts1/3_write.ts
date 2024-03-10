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

export type Operation = Cost | Profit;

export type Cost = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    amount?: number;
    category: Category;
    type: 'Cost';
};

export type Profit = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    amount?: number;
    category: Category;
    type: 'Profit';
};
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const rundomProductId: string = Math.random().toString(16).slice(-8);
    const rundomCategoryId: string = Math.random().toString(16).slice(-8);
    return {
        id: rundomProductId,
        name: 'Product_' + rundomProductId,
        photo: 'Photo_' + rundomProductId,
        createdAt: createdAt,
        price: Math.floor(Math.random() * 10000),
        category: {
            id: rundomCategoryId,
            name: 'Category_' + rundomCategoryId,
            photo: 'Photo_' + rundomCategoryId
        }
    }
};
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const rundomProductId: string = Math.random().toString(16).slice(-8);
    const rundomCategoryId: string = Math.random().toString(16).slice(-8);
    return {
        id: rundomProductId,
        name: 'Operatoion_' + rundomProductId,
        createdAt: createdAt,
        amount: Math.floor(Math.random() * 10000),
        photo: 'Photo_' + rundomProductId,
        category: {
            id: rundomCategoryId,
            name: 'Категория ' + rundomCategoryId,
            photo: 'Photo_' + rundomCategoryId
        },
        type: Math.floor(Math.random() * 2) > 0 ? 'Cost' : 'Profit'
    }
};