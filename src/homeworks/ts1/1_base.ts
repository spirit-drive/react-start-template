/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */

type CustomerId = string | number

type ContrastType = 'black' | 'white'

interface IRGB {
  red: number,
  green: number,
  blue: number
}

interface ICSSString {
  x: number,
  y: number
}

interface INumberedArray<T> {
  value: T,
  number: number
}


interface ICustomer {
  id: CustomerId,
  name: string,
  age: string | number,
  isSubscribed: boolean
}

interface ICustomerTransformed {
  [id:CustomerId]: Omit<ICustomer, 'id'>
}

export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: string, separator: string = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string): ICSSString => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number,number,number]): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): ContrastType => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;

export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};


export const hex2rgb = (color: string): IRGB => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return { red, green, blue };
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return { red, green, blue };
};

export const getNumberedArray = <T>(arr: Array<T>): INumberedArray<T>[] => arr.map((value: T, number: number) => ({ value, number }));

export const toStringArray = <T>(arr: INumberedArray<T>[]): string[] => arr.map(({ value, number }: INumberedArray<T>) => `${value}_${number}`);

export const transformCustomers = (customers: ICustomer[]): ICustomerTransformed => {
  return customers.reduce((acc: ICustomerTransformed, customer: ICustomer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
