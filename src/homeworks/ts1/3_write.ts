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
class Category {
    id : string;
    name : string;
    photo? : string;

    constructor(id : string, name : string, photo? : string) {
        this.id = id;
        this.name = name;
        this.photo = photo;
    }
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
 */
class Product {
    id : string;
    name : string;
    photo : string;
    desc? : string;
    createdAt : string;
    oldPrice? : number;
    price : number;
    category : Category; 
    
    constructor(id : string, name : string, photo : string, createdAt : string, 
                price : number, category : Category, desc? : string, oldPrice? : number) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.createdAt = createdAt;
        this.price = price;
        this.category = category;
        this.desc = desc;
        this.oldPrice = oldPrice;
    }
}

const Operations = ["Cost", "Profit"] as const;
type TOperation = (typeof Operations)[number];

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 */
class Operation {
    id : string;
    name : string; 
    desc? : string;
    createdAt : string;
    amount : number;
    category : Category;
    readonly type: TOperation;

    constructor (id: string, name: string, createdAt : string, amount : number, category : Category, type : TOperation, desc? : string) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.amount = amount;
        this.category = category;
        this.type = type;
        this.desc = desc;
    }
}

/**
 * Трата (Cost)
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */
class Cost implements Operation {
    id: string;
    name: string;
    desc: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: TOperation = 'Cost';

    constructor(id : string, name : string, createdAt : string, amount : number, category : Category, desc? : string) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.amount = amount;
        this.category = category;
        this.desc = desc;
    }
}

/**
 * Доход (Profit)
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
class Profit implements Operation {
    id: string;
    name: string;
    desc: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: TOperation = 'Profit';

    constructor(id : string, name : string, createdAt : string, amount : number, category : Category, desc? : string) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.amount = amount;
        this.category = category;
        this.desc = desc;
    }
}

//Получить произвольную строку
const getRandomString = () : string => {
    let randomString : string = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let i : number = 0;
    while (i <= 10) {
        randomString += characters.charAt(Math.floor(Math.random()*characters.length));
        i++;
    }
    return randomString;
}

//Получить произвольное число
const getRandomNumber = (maxValue : number, minValue : number = 0) : number => {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

//Максимальное число операции
const maxOperationAmount = 10;

//Максимальная стоимость продукта
const maxProductPrice = 5000;

//Список категорий
const categories : Category[] = [
    new Category(getRandomString(), "Автомобиль"),
    new Category(getRandomString(), "Дом"),
    new Category(getRandomString(), "Здоровье"),
    new Category(getRandomString(), "Одежда"),
    new Category(getRandomString(), "Питание"),
    new Category(getRandomString(), "Хобби")
]

//Список продуктов
const products = [
    "INOI A62",
    "TECHNO SPARK GO",
    "Infinix SMART",
    "Pixma G2420"
];

//Список операций
const operations = [
    "Аренда",
    "Курсы",
    "Обучение",
    "Работа"
]

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
 export const createRandomProduct = (createdAt: string) : Product => {
    let categoryIndex = getRandomNumber(categories.length);
    let category = categories[categoryIndex]
    
    let productIndex = getRandomNumber(products.length);
    let productName = products[productIndex];

    let productId = getRandomString();
    let photo = getRandomString();
    let price = getRandomNumber(maxProductPrice,  1);

    return new Product(productId, productName, photo, createdAt, price, category);
 };

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
 export const createRandomOperation = (createdAt: string) =>  {
    let categoryIndex = getRandomNumber(categories.length); 
    let category = categories[categoryIndex];

    let operationIndex = getRandomNumber(operations.length);
    let operationName = operations[operationIndex];
    
    let operationTypeIndex = getRandomNumber(Operations.length);
    let operationType = Operations[operationTypeIndex] as TOperation;
    
    let amount = getRandomNumber(maxOperationAmount, 1);
    return new Operation(getRandomString(), operationName, createdAt, amount, category, operationType);
 };