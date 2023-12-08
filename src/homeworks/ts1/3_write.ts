// Функции написанные здесь пригодятся на последующих уроках
// С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
// Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
// В целом сделайте так, как вам будет удобно.

// Нужно создать тип Category, он будет использоваться ниже.
export class Category {
    // Категория содержит
    // - id (строка)
    id: string;
    // - name (строка)
    name: string;
    // - photo (строка, необязательно)
    photo?: string;
}

// Продукт (Product) содержит
export class Product {
    constructor(createdAt: string){
        this.createdAt = createdAt;
    }
    // - id (строка)
    id: string;
    // - name (строка)
    name: string;
    // - photo (строка)
    photo: string;
    // - desc (строка, необязательно)
    phdescoto?: string;
    // - createdAt (строка)
    createdAt: string;
    // - oldPrice (число, необязательно)
    oldPrice?: number;
    // - price (число)
    price: number;
    // - category (Категория)
    category: Category;
}

// Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
export enum Operation {
    'Cost',
    'Profit'
}

export class Income {
    constructor(createdAt: string){
        this.createdAt = createdAt;
    }
    // - id (строка)
    id: string;
    // - name (строка)
    name: string;
    // - desc (строка, необязательно)
    desc?: string;
    // - createdAt (строка)
    createdAt: string;
    // - amount (число)
    amount: number;
    // - category (Категория)
    category: Category;
}

// Трата (Cost) содержит
export class Cost extends Income {
    constructor(createdAt: string){
        super(createdAt)
    }
    // - type ('Cost')
    type: Operation.Cost;
}

export class Profit extends Income {
    constructor(createdAt: string){
        super(createdAt)
    }
    // - type ('Profit')
    type: Operation.Profit;
}

// Создает случайный продукт (Product)
// Принимает дату создания (строка)
export const createRandomProduct = (createdAt: string): Product  => {
    if(createdAt.length == 0) {
      throw new Error('Нет даты');
    }
    return new Product(createdAt);
};

// Создает случайную операцию(Operation).
//Принимает дату создания(строка)
export const createRandomOperation = (createdAt: string): Cost => {
    if(createdAt.length == 0) {
        throw new Error('Нет даты');
      }
      return new Cost(createdAt);
};
