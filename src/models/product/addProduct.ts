import { Product } from "./product";

export type ProductAddModel = Pick<Product, 'name' | 'price'> &
    Partial<Pick<Product, 'desc' | 'photo'>> &
    { categoryId: string}

