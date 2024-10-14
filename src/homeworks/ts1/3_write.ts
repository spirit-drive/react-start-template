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

interface RequiredData {
  id: string;
  name: string;
}

interface Category extends RequiredData {
  photo?: string;
}

interface Product extends RequiredData {
  photo: string;
  createdAt: string;
  price: number;
  category: Category;
  desc?: string;
  oldPrice?: number;
}

interface OperationRequiredData extends RequiredData {
  createdAt: string;
  amount: number;
  category: Category;
  desc?: string;
}

interface Cost extends OperationRequiredData {
  type: 'Cost';
}

interface Profit extends OperationRequiredData {
  type: 'Profit';
}

type Operation = Profit | Cost;

const randomNumberGenerator = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;
const isTrue = (): boolean => Boolean(Math.round(Math.random()));
const categoryGenerator = (id: number): Category => ({
  id: id.toString(),
  name: `Товар #${id}`,
  photo: isTrue() ? `assets/category/${id}.png` : undefined,
});

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct = (createdAt: string): Product => {
  const _id = randomNumberGenerator(0, 1000000);
  const _price = _id * 1000;
  const _oldPrice = _price + 10;
  const _catId = randomNumberGenerator(0, 1000000);

  const result: Product = {
    id: _id.toString(),
    name: `Товар #${_id}`,
    photo: `assets/goods/${_id}.png`,
    price: _price,
    createdAt: createdAt,
    category: categoryGenerator(_catId),
    desc: !isTrue() ? undefined : `Описание лучшего в мире товара с id ${_id}`,
    oldPrice: isTrue() ? _oldPrice : undefined,
  };

  return result;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const _id = randomNumberGenerator(0, 1000000);
  const _type = isTrue() ? 'Profit' : 'Cost';
  const _amount = randomNumberGenerator(0, 10);
  const _catId = randomNumberGenerator(0, 1000000);

  const result: Operation = {
    id: _id.toString(),
    name: `Операция #${_id}`,
    type: _type,
    createdAt: createdAt,
    amount: _amount,
    category: categoryGenerator(_catId),
    desc: !isTrue() ? `Описание операции от ${createdAt}` : undefined,
  };

  return result;
};

console.log(createRandomOperation('22-04-2023'));
console.log(createRandomProduct('22-04-2023'));
