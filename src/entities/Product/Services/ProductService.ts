import { categories } from '../../Category/Const/CategoryConst';
import { products } from '../../Product/Const/ProductConst';
import { Product } from '../Model/Product';
import { getRandomNumber, getRandomString } from '../../../helper/helper';

//Максимальная стоимость продукта
const maxProductPrice = 5000;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const categoryIndex = getRandomNumber(categories.length);
  const category = categories[categoryIndex];

  const productIndex = getRandomNumber(products.length);
  const productName = products[productIndex].name;
  const description = products[productIndex].description;
  const photo = products[productIndex].photo;

  const productId = getRandomString();
  const price = getRandomNumber(maxProductPrice, 1);

  return new Product(productId, productName, photo, createdAt, price, category, description);
};
