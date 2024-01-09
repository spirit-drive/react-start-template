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
    photo?: string,
}

type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category,
}

type Operation = Cost | Profit

type Cost = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}

type Profit = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit'
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const createUniqueId = (): string => "id" + Math.random().toString(16).slice(2);
const pickRandomArrayValue = (arr: Array<string> | Array<number>): string | number => {
    return arr[Math.floor(Math.random() * arr.length)];
}

type DB = {
    product: {
        nameList: Array<string>
        photoUrlList: Array<string>
        descrList: Array<string>
        oldPrice: Array<number>
        price: Array<number>
        category: {
            nameList: Array<string>
            photoList: Array<string>
        },
    },
    operations: {
        name: Array<string>
        desc?:  Array<string>
        amount: Array<number>
        category: {
            nameList: Array<string>
            photoList: Array<string>
        },
    },
}

const fakeDB: DB = {
    product: {
        nameList: ['Apple', 'Samsung', 'Nokia', 'Philips'],
        photoUrlList: ['urlApple','urlSamsung', 'urlNokia', 'urlPhilips'],
        descrList: ['descrApple', 'descrSamsung', 'descrNokia', 'descrPhilips'],
        oldPrice: [1500, 1400, 1300, 1200],
        price: [1000, 900, 800, 700],
        category: {
            nameList: ['phone', 'laptop'],
            photoList: ['urlPhone', 'urlLaptop'],
        },
    },
    operations: {
        name: ["Cost", "Profit"],
        desc: ["CostDescr", 'ProfitDescr'],
        amount: [100, 300, 120],
        category: {
            nameList: ['nameCategoryCost', 'nameCategoryProfit'],
            photoList: ['urlCost', 'urlProfit'],
        },
    },
}

export const createRandomProduct = (createdAt: string): Product => {
    return {
        id: createUniqueId(),
        name: pickRandomArrayValue(fakeDB.product.nameList) as string,
        photo: pickRandomArrayValue(fakeDB.product.photoUrlList) as string,
        desc: pickRandomArrayValue(fakeDB.product.descrList) as string,
        createdAt: createdAt,
        oldPrice: pickRandomArrayValue(fakeDB.product.oldPrice) as number,
        price: pickRandomArrayValue(fakeDB.product.price) as number,
        category: {
            id: createUniqueId(),
            name: pickRandomArrayValue(fakeDB.product.category.nameList) as string,
            photo: pickRandomArrayValue(fakeDB.product.category.photoList) as string,
        },
    };
}

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const selectedRandomOperation: 'Cost' | 'Profit' = Math.random() < 0.5 ? 'Cost' : 'Profit';

    return {
        id: createUniqueId(),
        name: pickRandomArrayValue(fakeDB.operations.name) as string,
        desc: pickRandomArrayValue(fakeDB.operations.desc) as string,
        createdAt: createdAt,
        amount: pickRandomArrayValue(fakeDB.operations.amount) as number,
        category: {
            id: createUniqueId(),
            name: pickRandomArrayValue(fakeDB.operations.category.nameList) as string,
            photo: pickRandomArrayValue(fakeDB.operations.category.photoList) as string,
        },
        type: selectedRandomOperation,
    }
};



