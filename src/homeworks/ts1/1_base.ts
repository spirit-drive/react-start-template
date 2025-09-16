/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (value: string): string => value.replace(/^\+/, '');

export const addPlus = (value: string): string => `+${value}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value?: string, separator = ' '): string | undefined =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export type CssCoord = {
  x: number,
  y: number
}

export const getTransformFromCss = (transformCssString: string): CssCoord => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return {
    x: 0,
    y: 0
  };

  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);


export const enum Contrast {
  Black = 'black',
  White = 'white'
}
export const getContrastType = (contrastValue: number): Contrast => (contrastValue > 125 ? Contrast.Black : Contrast.White);

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): [number, number, number] => {
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

type ValueNumber = {
  value: number,
  number: number
}

export const getNumberedArray = (arr: number[]): ValueNumber[] => arr.map((value, number) => ({ value, number }));
export const toStringArray = (arr: ValueNumber[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

type Customer = {
  id: number,
  name: string,
  age: number,
  isSubscribed: boolean
}

type CustomerWithId = {
  id: number,
} & Customer;

export const transformCustomers = (customers: CustomerWithId[]): {[key: number]: Customer} => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { id: customer.id, name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, <{[key: number]: Customer}>{});
};
