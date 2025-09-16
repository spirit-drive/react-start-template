import { Product } from "./product/product";

export type BasketProductType = Pick<Product, "id" | "photo" | "name" | "price">;

export function GetBasketFromProduct(prod: Product[]): BasketProductType[] {
  return prod.map(x => <BasketProductType>{ id: x.id, photo: x.photo, name: x.name, price: x.price })
}
