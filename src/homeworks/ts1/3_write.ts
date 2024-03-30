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
export type Category = {
    id: string;
    name: string;
    photo?: string;
};

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
 */
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

export type Operation = ICost | IProfit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
const randomNumber = (val: number): string => Math.floor(Math.random() * (val - 0) + 0).toString();

export const createRandomProduct = (createdAt: string): Product => {
    const uniqueVal = randomNumber(4);
    return {
        id: uniqueVal,
        photo: `img/smth/${uniqueVal}`,
        name: ['Апельсин', 'яблоко', 'помидор', 'огурец'][Number(uniqueVal)],
        desc: ['Рыжий', undefined, 'красный', undefined][Number(uniqueVal)],
        createdAt: createdAt,
        oldPrice: [40, 30, 80, undefined][Number(uniqueVal)],
        price: [30, 20, 70, 50][Number(uniqueVal)],
        category: Number(uniqueVal) > 1 ? { id: 'vegetables', name: 'овощи' } : { id: 'fruits', name: 'фрукты' },
    };
};

const randomProduct = createRandomProduct(new Date().toString());

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const uniqueVal = randomNumber(2);
    const operation = Number(uniqueVal) === 0 ? 'Cost' : 'Profit';
    return {
        id: uniqueVal,
        name: operation + ' - ' + randomProduct.name,
        desc: operation === 'Cost' ? `потратили на ${randomProduct.name}` : undefined,
        createdAt: createdAt,
        amount: randomProduct.price,
        category: randomProduct.category,
        type: operation,
    };
};

console.log(createRandomOperation(new Date().toString()));
