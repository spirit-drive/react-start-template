// Получение данных с сервера
export type Category = {
    id: string;
    name: string;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
    commandId: string;
};

export type Product = {
    id: string;
    name: string;
    photo?: string;
    desc?: string;
    createdAt: Date;
    updatedAt: Date;
    oldPrice?: number;
    price: number;
    commandId: string;
    category: Category;
};

export type Pagination = {
    pageSize?: number;
    pageNumber?: number;
};

export type Sorting = {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name';
};

// Ответ сервера - продукты
export type TProductRaw = {
    data: Product[],
    pagination: Pagination,
    sorting: Sorting,
}

// Добавление нового товара (отправка на сервер)
export interface TAddProductParams {
    name: string;
    photo?: string;
    desc?: string;
    oldPrice?: number;
    price: number;
    categoryId: string;
};

// Добавление нового товара (Структура данных обрабатываемая формой)
export interface TAddProductFormParams {
    name: string;
    productImage: File;
    desc?: string;
    oldPrice?: number;
    price: string;
    categoryId: string;
};


// Обновление существующего товара
export type TUpdateProductParams = {
    id: string;
    name: string;
    photo?: string;
    desc?: string;
    createdAt: Date;
    updatedAt: Date;
    oldPrice?: number;
    price: number;
    commandId: string;
    categoryId: string;
};

// Ответ сервера - Категории
export type TCategoryRaw = {
    data: Category[];
    pagination: Pagination,
    sorting: Sorting,
}

