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
type Category = {
    id: string,
    name: string,
    photo?: string
}

/*
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
type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category

}
/*
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
*/
type Operation = Cost | Profit
/*
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
*/
type Cost = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}
/*
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 */
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
export const createRandomProduct = (createdAt: string): Product => {
    const randProduct: number = Math.floor(Math.random() * (999999 - 100000) + 100000)
    const randCategory: number = Math.floor(Math.random() * (999 - 100) + 100)
    return {
        id: 'PRODUCT_ID_' + randProduct,
        name: 'Продукт ' + randProduct,
        photo: 'Photo_' + randProduct,
        createdAt: createdAt,
        price: randProduct - 55555,
        category: {
            id: 'CATEGORY_ID_' + randCategory,
            name: 'Категория ' + randCategory
        }
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const randOperation: number = Math.floor(Math.random() * (9999999 - 1000000) + 1000000)
    const randCategory: number = Math.floor(Math.random() * (999 - 100) + 100)
    return {
        id: 'OPERATION_ID_' + randOperation,
        name: 'Операция № ' + randOperation,
        createdAt: createdAt,
        amount: Math.floor(randOperation * 0.7),
        category: {
            id: 'CATEGORY_ID_' + randCategory,
            name: 'Категория ' + randCategory
        },
        type: randOperation < 500000 ? 'Cost' : 'Profit'
    }
};
