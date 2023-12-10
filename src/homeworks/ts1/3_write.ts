/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

type TGeneralFields = {
  id: string;
  name: string;
};

type TCategory = TGeneralFields & {
  photo?: string;
};

type TCategoryGeneralFields = {
  desc?: string;
  createdAt: string;
  category: TCategory;
};

type TProduct = TCategory &
  TCategoryGeneralFields & {
    oldPrice?: number;
    price: number;
  };

type TOperationGeneralFields = {
  amount: number;
};

enum EOperation {
  Cost,
  Profit,
}

type TOperation = TCost | TProfit;

type TCost = TGeneralFields &
  TCategoryGeneralFields &
  TOperationGeneralFields & {
    type: EOperation.Cost;
  };

type TProfit = TGeneralFields &
  TCategoryGeneralFields &
  TOperationGeneralFields & {
    type: EOperation.Profit;
  };

const productNames = ['AMD', 'INTEL', 'NVIDIA', 'ATI', 'MSI'];

const productCategories = ['CPU', 'RAM', 'videoСard', 'systemUnit', 'HDD', 'SSD', 'LAN'];

const productPrices = [1000, 2000, 3000, 1500, 2700];

const operationNames = ['buy', 'sell', /*  */ 'pay', 'return', 'add to basket'];

function makeRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

export const createRandomProduct = (createdAt: string): TProduct => {
  const productName = productNames[getRandomIndex(productNames.length)];
  const productPrice = productPrices[getRandomIndex(productPrices.length)];
  const productCategory = productCategories[getRandomIndex(productCategories.length)];

  return {
    createdAt,
    id: makeRandomString(5),
    name: productName,
    price: productPrice,
    photo: productName + '.jpg',
    desc: 'description to' + productName,
    oldPrice: productPrice - 200,
    category: {
      id: makeRandomString(5),
      name: productCategory,
    },
  };
};

export const createRandomOperation = (createdAt: string): TOperation => {
  const operationName = operationNames[getRandomIndex(productNames.length)];
  const productCategory = productCategories[getRandomIndex(productCategories.length)];
  const type = getRandomIndex(1) ? EOperation.Cost : EOperation.Profit;
  return {
    createdAt,
    type,
    id: makeRandomString(5),
    name: operationName,
    amount: 1,
    desc: 'description to ' + operationName,
    category: {
      id: makeRandomString(5),
      name: productCategory,
    },
  };
};
