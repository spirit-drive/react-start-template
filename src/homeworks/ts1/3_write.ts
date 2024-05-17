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

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

export class Category {
    id: string;
    name: string;
    photo?: string;
}

export class Product {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

export type COST = 'Cost';
export type PROFIT = 'Profit';
export type OperationType = COST | PROFIT;

export abstract class Operation {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    readonly abstract type: OperationType;
}

export class Cost extends Operation {
    readonly type: OperationType = 'Cost';
}

export class Profit extends Operation {
    readonly type: OperationType = 'Profit';
}

const getRandomNumber = (maxValue: number): number => Math.floor(Math.random() * maxValue);

export const createRandomProduct = (createdAt: string): Product => {

    let randomNumber: number = getRandomNumber(1000);

    let randomString: string = randomNumber + '_' + createdAt;

    return {
        id: randomString,
        name: randomString,
        photo: randomString,
        desc: randomString,
        createdAt: createdAt,
        oldPrice: randomNumber + 100,
        price: randomNumber,
        category: { id: '1', name: "SomeCategory", photo: randomString }
    };
};

export const createRandomOperation = (createdAt: string): Operation => {

    let randomNumber: number = getRandomNumber(1000);

    let randomString: string = randomNumber + '_' + createdAt;

    let operationData = {
        id: randomString,
        name: randomString,
        desc: randomString,
        createdAt: createdAt,
        amount: randomNumber,
        category: { id: '1', name: "SomeCategory", photo: randomString },
    }

    let operation: Operation;

    if (randomNumber < 500) {
        operation = new Cost();
    } else {
        operation = new Profit();
    }

    Object.assign(operation, operationData);

    return operation;
};


