import { Product } from "./product";

export type ProductUpdateModel = Pick<Product, 'id'> & Partial<Pick<Product, 'name' | 'desc' | 'price' | 'photo'>>

