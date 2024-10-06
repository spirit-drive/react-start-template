import drill from '../../asserts/Icons/free-icon-construction-drill.png'
import crane from '../../asserts/Icons/free-icon-crane-truck.png'
import truck from '../../asserts/Icons/free-icon-dump-truck.png'
import excavator from '../../asserts/Icons/free-icon-excavator.png'


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

/* Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

/* Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
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
}

type BaseId = Omit<Category, "photo">
type PhotoNotRequired = Pick<Category, "photo">
type PhotoRequired = Required<PhotoNotRequired>

export type Product = BaseId & PhotoRequired & {
    desc?: string;
    createdAt: string;
    oldPrice: string;
    price: number;
    category: Category;
}

type Operation = Profit | Cost

type Profit = BaseId & {
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
}

type OperationWithoutType = Omit<Profit, "type">

type Cost = OperationWithoutType & {
    type: 'Cost';
}

const getRandomNumber = (limit: number) => {
    return Math.floor(Math.random() * limit + 1);
}

const testCategories: Category[] = [
    {
        id: "1",
        name: "Работа с землей",
    },
    {
        id: "2",
        name: "Подъем грузов",
    },
    {
        id: "3",
        name: "Бурение",
    },
]


const photos: string[] = [
     drill, crane, truck, excavator
]

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};
export const createRandomProduct = (createdAt: string): Product => {
    const id = getRandomNumber(10000).toString();
    const name = 'ProductName' + getRandomNumber(1000).toString();
    const photo = photos[getRandomNumber(3)];
    const price = getRandomNumber(10000);
    const desc = 'description ' + getRandomNumber(1000).toString();
    const oldPrice = (price - getRandomNumber(10000)).toString();
    const category = testCategories[getRandomNumber(2)];

    return {
        id,
        name,
        photo,
        createdAt,
        price,
        category,
        desc,
        oldPrice
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

export const createRandomOperation = (createdAt: string): Operation => {
    let randomOperation = Math.floor(Math.random() * 100 % 2);
    let type: 'Profit' | 'Cost' = randomOperation == 0 ? "Profit" : "Cost" ;

    let id = getRandomNumber(10000).toString();
    let name = `Операция - ${type}`;
    let amount = getRandomNumber(10000);
    let desc = type;
    const category = testCategories[getRandomNumber(2)];

    return {
        id,
        name,
        createdAt,
        amount,
        category,
        type,
        desc,
    }
}

