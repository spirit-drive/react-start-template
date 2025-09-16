export type Product = {
    id: string;             // идентификатор товара
    category: Category;     // категория
    commandId: string;
    createdAt: Date;
    desc?: string;          // описание
    name: string;           // название
    oldPrice?: number;
    photo?: string;         // изображение
    price: number;          // стоимость
    updatedAt: Date;
}