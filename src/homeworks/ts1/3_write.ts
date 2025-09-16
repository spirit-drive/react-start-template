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
}

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

 const enum Operation {
    Cost = 'Cost',
    Profit = 'Profit'
}

type Cost = {
    id: string,
    name: string,
    desc: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: Operation.Cost
}

type Profit = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: Operation.Profit
}

const category: Category[] = [
    {
        id: '0195a599-24de-7592-938d-4ec907ce3f4b',
        name: 'Бытовая техника'
    },
    {
        id: '0195a599-7e28-7787-8301-da5a8bfc1773',
        name: 'Смартфоны и фототехника'
    },
    {
        id: '0195a599-a001-72da-aa72-1f82896132fe',
        name: 'Офис и мебель'
    }
]

const productList: Product[] = [
    {
        id: '',
        name: 'Стиральная машина',
        photo: '',
        price: 10,
        createdAt: '',
        category: category[0],
    },
    {
        id: '',
        name: 'Холодильник',
        photo: '',
        price: 25,
        createdAt: '',
        category: category[0],
    },
    {
        id: '',
        name: 'Кондиционер',
        photo: '',
        price: 20,
        createdAt: '',
        category: category[0],
    },


    {
        id: '',
        name: 'Смартфон',
        photo: '',
        price: 10,
        createdAt: '',
        category: category[1],
    },
    {
        id: '',
        name: 'Планшет',
        photo: '',
        price: 15,
        createdAt: '',
        category: category[1],
    },
    {
        id: '',
        name: 'Фотоаппарат',
        photo: '',
        price: 10,
        createdAt: '',
        category: category[1],
    },

    {
        id: '',
        name: 'Стул',
        photo: '',
        price: 3,
        createdAt: '',
        category: category[2],
    },
    {
        id: '',
        name: 'Стол',
        photo: '',
        price: 5,
        createdAt: '',
        category: category[2],
    },
    {
        id: '',
        name: 'Кресло',
        photo: '',
        price: 4,
        createdAt: '',
        category: category[2],
    },
    {
        id: '',
        name: 'Тумба',
        photo: '',
        price: 2,
        createdAt: '',
        category: category[2],
    }

]

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const product = productList[Math.floor(Math.random()*productList.length)]

    return {
        id: crypto.randomUUID(),
        name: product.name,
        photo: product.photo,
        category: product.category,
        price: product.price*Math.random()*1000,
        createdAt: createdAt
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    return [Operation.Cost, Operation.Profit][Math.floor(Math.random()*2)];
};
