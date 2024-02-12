'use strict';
/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
Object.defineProperty(exports, '__esModule', { value: true });
exports.createRandomProduct = void 0;
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
var createUniqueId = function () {
  return 'id' + Math.random().toString(16).slice(2);
};
var pickRandomArrayValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
var fakeDB = {
  product: {
    nameList: ['Apple', 'Samsung', 'Nokia', 'Philips'],
    photoUrlList: ['urlApple', 'urlSamsung', 'urlNokia', 'urlPhilips'],
    descrList: ['descrApple', 'descrSamsung', 'descrNokia', 'descrPhilips'],
    oldPrice: [1500, 1400, 1300, 1200],
    price: [1000, 900, 800, 700],
  },
  category: {
    nameList: ['phone', 'laptop'],
    photoList: ['urlPhone', 'urlLaptop'],
  },
};
var createRandomProduct = function (createdAt) {
  return {
    id: createUniqueId(),
    name: pickRandomArrayValue(fakeDB.product.nameList),
    photo: pickRandomArrayValue(fakeDB.product.photoUrlList),
    desc: pickRandomArrayValue(fakeDB.product.descrList),
    createdAt: createdAt,
    oldPrice: pickRandomArrayValue(fakeDB.product.oldPrice),
    price: pickRandomArrayValue(fakeDB.product.price),
    category: {
      id: createUniqueId(),
      name: pickRandomArrayValue(fakeDB.category.nameList),
      photo: pickRandomArrayValue(fakeDB.category.photoList),
    },
  };
};
exports.createRandomProduct = createRandomProduct;
var randomProduct = (0, exports.createRandomProduct)('сейчас');
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
