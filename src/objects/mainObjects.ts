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
    var product = new Product(createdAt);
    product.id = (Math.floor(Math.random() * 100) + 1).toString();
    product.name = 'Продукт1';
    product.photo = 'Фото1';
    product.price = 20;
    product.category ={
        id : (Math.floor(Math.random() * 100) + 1).toString(),  
        name: "Категория1"
    } as Category;
    return product;
};

// Создает случайную операцию(Operation).
//Принимает дату создания(строка)
export const createRandomOperation = (createdAt: string): Cost => {
    if(createdAt.length == 0) {
        throw new Error('Нет даты');
      }
      var cost = new Cost(createdAt);
      cost.id = (Math.floor(Math.random() * 100) + 1).toString();
      cost.name = 'Операция1';
      cost.amount = 10;
      cost.type = Operation.Cost;
      cost.desc = 'Описание операции1 категории1 стоимости10';
      cost.category ={
        id : (Math.floor(Math.random() * 100) + 1).toString(),  
        name: "Категория1"
    } as Category;
      return cost;
};
