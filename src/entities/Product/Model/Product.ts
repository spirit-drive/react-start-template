import { Category } from '../../Category/Model/Category';

/**
 * Продукт
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */
export class Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
  commandId: string;

  constructor(
    id: string,
    name: string,
    photo: string,
    createdAt: string,
    price: number,
    category: Category,
    desc?: string,
    oldPrice?: number
  ) {
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
