/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value?: string | number, separator = ' '): string | void =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

type TransformFromCssResult = {
  x: number;
  y: number;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string): TransformFromCssResult => {
  const data: RegExpMatchArray = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type ColorInRGB = [number, number, number];

export const getColorContrastValue = ([red, green, blue]: ColorInRGB): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type ContrastType = 'black' | 'white';

export const getContrastType = (contrastValue: number): ContrastType => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

type HEXColor = `#${string}`;

export const checkColor = (color: HEXColor): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: HEXColor): ColorInRGB | never => {
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

type NumberedValue<T> = { value: T; number: number };

export const getNumberedArray = <T = unknown>(arr: T[]): NumberedValue<T>[] =>
  arr.map((value: T, number: number): NumberedValue<T> => ({ value, number }));

export const toStringArray = <T = unknown>(arr: NumberedValue<T>[]): string[] =>
  arr.map(({ value, number }) => `${value}_${number}`);

interface Customer {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
}

type transformCustomersResult = { [key: number]: Omit<Customer, 'id'> };

export const transformCustomers = (customers: Customer[]): transformCustomersResult => {
  return customers.reduce((acc: transformCustomersResult, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
