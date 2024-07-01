// /**
//  * Функции написанные здесь пригодятся на последующих уроках
//  * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
//  * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
//  * В целом сделайте так, как вам будет удобно.
//  * */
//
// /**
//  * Нужно создать тип Category, он будет использоваться ниже.
//  * Категория содержит
//  * - id (строка)
//  * - name (строка)
//  * - photo (строка, необязательно)
//  **/
// export type Category = {
//   id: string;
//   name: string;
//   photo?: string;
// };
// export type Product = {
//   id: string;
//   name: string;
//   photo?: string;
//   desc?: string;
//   createdAt?: string;
//   oldPrice?: number;
//   price: number;
//   category: Category;
// };
//
// export interface IBaseOperation {
//   id: string;
//   name: string;
//   desc?: string;
//   createdAt: string;
//   amount: number;
//   category: Category;
// }
//
// export type Cost = IBaseOperation & {
//   type: 'Cost';
// };
//
// export type Profit = IBaseOperation & {
//   type: 'Profit';
// };
// export type Operation = Cost | Profit;
// /* * Продукт (Product) содержит
//  * - id (строка)
//  * - name (строка)
//  * - photo (строка)
//  * - desc (строка, необязательно)
//  * - createdAt (строка)
//  * - oldPrice (число, необязательно)
//  * - price (число)
//  * - category (Категория)
//  *
//  * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
//  *
//  * Трата (Cost) содержит
//  * - id (строка)
//  * - name (строка)
//  * - desc (строка, необязательно)
//  * - createdAt (строка)
//  * - amount (число)
//  * - category (Категория)
//  * - type ('Cost')
//  *
//  * Доход (Profit) содержит
//  * - id (строка)
//  * - name (строка)
//  * - desc (строка, необязательно)
//  * - createdAt (строка)
//  * - amount (число)
//  * - category (Категория)
//  * - type ('Profit')
//  * */
// /**
//  * Создает случайный продукт (Product).
//  * Принимает дату создания (строка)
//  * */
// export const createRandomProduct = (createdAt: string): Product => {
//   const product: Product = {
//     id: faker.datatype.uuid(), // Генерация уникального ID
//     name: faker.commerce.productName(), // Случайное имя продукта
//     photo: faker.image.imageUrl(), // Случайная ссылка на изображение
//     desc: faker.lorem.sentence(), // Случайное описание
//     createdAt: createdAt, // Дата создания
//     oldPrice: faker.datatype.number({ min: 10, max: 1000 }), // Случайная старая цена
//     price: faker.datatype.number({ min: 1, max: 100 }), // Случайная цена
//     category: {
//       id: faker.datatype.uuid(), // Генерация уникального ID категории
//       name: faker.commerce.department(), // Случайное название категории
//     },
//   };
//   return product;
// };
//
// /**
//  * Создает случайную операцию (Operation).
//  * Принимает дату создания (строка)
//  * */
// export const createRandomOperation = (createdAt: string): Operation => {
//   const isCost = faker.datatype.boolean();
//   const operation: Operation = {
//     id: faker.datatype.uuid(),
//     name: faker.lorem.words(3),
//     desc: faker.lorem.sentence(),
//     createdAt: createdAt,
//     amount: faker.datatype.number({ min: 10, max: 1000 }),
//     category: {
//       id: faker.datatype.uuid(),
//       name: faker.commerce.department(),
//     },
//     type: isCost ? 'Cost' : 'Profit',
//   };
//   return operation;
// };
