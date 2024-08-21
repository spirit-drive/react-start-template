export type Category = {
    id: string;
    name: string;
    photo?: string;
};

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
@@ -21,7 +28,19 @@
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
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
@@ -42,15 +61,61 @@
 * - category (Категория)
 * - type ('Profit')
 * */
interface IOperation {
    id: string;
    name: string;
    description?: string;
    date: string;
    amount: number;
    category: Category;
}
interface ICost extends IOperation {
    type: 'Затраты';
}
interface IProfit extends IOperation {
    type: 'Прибыль';
}

export type Operation = ICost | IProfit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};
const randomNumber = (val: number): string => Math.floor(Math.random() * (val - 0) + 0).toString();


export const createRandomProduct = (createdAt: string): Product => {
    const uniqueVal = randomNumber(4);
    const productId = randomNumber(1000)
    //const productId = randomNumber(1000)
    return {
        id: productId,
        photo: `img/smth/${uniqueVal}`,
        name: ['Апельсин', 'яблоко', 'помидор', 'огурец'][Number(uniqueVal)],
        desc: ['Рыжий', undefined, 'красный', undefined][Number(uniqueVal)],
        createdAt: createdAt,
        oldPrice: [400, 300, 800, undefined][Number(uniqueVal)],
        price: [300, 200, 700, 500][Number(uniqueVal)],
        category: Number(uniqueVal) > 1 ? { id: 'vegetables', name: 'овощи' } : { id: 'fruits', name: 'фрукты' },
    };
};



/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
export const createRandomOperation = (createdAt: string): Operation => {
    const randomProduct = createRandomProduct(new Date().toString());
    const operationId = randomNumber(1000)
    const uniqueVal = randomNumber(2);
    const operation = Number(uniqueVal) === 0 ? 'Затраты' : 'Прибыль';
    return {
        id: operationId,
        name: operation + ' - ' + randomProduct.name,
        description: operation === 'Затраты' ? `потратили на ${randomProduct.name}` : `Прибыль с товара ${randomProduct.name}`,
        date: createdAt,
        amount: randomProduct.price,
        category: randomProduct.category,
        type: operation,
    };
};

