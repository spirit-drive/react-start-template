/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d: number = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type TransformCss = {
  x: number;
  y: number;
};
export const getTransformFromCss = (transformCssString: string): TransformCss => {
  const data: RegExpMatchArray = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type RGBColor = [number, number, number];
export const getColorContrastValue = ([red, green, blue]: RGBColor): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type Colors = 'black' | 'white';
export const getContrastType = (contrastValue: number): Colors => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

type Hex2rgbReturnType = [number, number, number];
export const hex2rgb = (color: string): Hex2rgbReturnType => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type GetNumberedArrayArg = number | string | symbol;
type GetNumberedArrayReturn = {
  value: GetNumberedArrayArg;
  number: number;
};
export const getNumberedArray = (arr: GetNumberedArrayArg[]): GetNumberedArrayReturn[] => {
  return arr.map((value: GetNumberedArrayArg, number: number): GetNumberedArrayReturn => ({ value, number }));
};

type ToStringArrayArg = {
  value: number | string;
  number: number;
};

export const toStringArray = (arr: ToStringArrayArg[]): string[] => {
  return arr.map(({ value, number: number }: ToStringArrayArg): string => `${value}_${number}`);
};

interface ICustomer {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
}

interface IIndexedCustomer {
  [key: number]: Omit<ICustomer, 'id'>;
}

export const transformCustomers = (customers: ICustomer[]): IIndexedCustomer => {
  return customers.reduce((acc: IIndexedCustomer, customer: ICustomer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
