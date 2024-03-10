/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */



export type SomeCss = {
  x: number;
  y: number;
};

export type ColorValue = [
  number,
  number,
  number
];

export type ContrastType = 'black' | 'white';

export type NumberedArray<T> = {
  value: T,
  number: number
}

export type CustomerId = string | number

export type Customer ={
  id: CustomerId,
  name: string,
  age: string | number,
  isSubscribed: boolean
}

export type CustomerTransformed = {
  [id:CustomerId]: Omit<Customer, 'id'>
}

export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator: string = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) || '';


export const round = (value: number, accuracy: number = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

 

export const getTransformFromCss = (transformCssString: string): SomeCss => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: ColorValue): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): ContrastType => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): ColorValue => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = <T>(arr: Array<T>): NumberedArray<T>[] => arr.map((value: T, number: number) => ({ value, number }));

export const toStringArray = <T>(arr: NumberedArray<T>[]): string[] => arr.map(({ value, number }: NumberedArray<T>) => `${value}_${number}`);

export const transformCustomers = (customers: Customer[]): CustomerTransformed => {
  return customers.reduce((acc: CustomerTransformed, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
