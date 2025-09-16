import { Product } from "./product";

export type ProductEditModel = Partial<Pick<Product, 'name' | 'desc' | 'price' | 'photo'>>
