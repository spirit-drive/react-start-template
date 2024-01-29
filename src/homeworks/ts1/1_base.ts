export const removePlus = (x: string): string => x.replace(/^\+/, '');

export const addPlus = (x: string): string => `+${x}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: string, separator: string = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};


const transformRegexp: RegExp = /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;
interface ITransformInfo {
  x: number;
  y: number;
}
export const getTransformFromCss = (transformCssString: string): ITransformInfo => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = (colors: [number, number, number]): number =>
  Math.round((colors[0] * 299 + colors[1] * 587 + colors[2] * 114) / 1000);

export const getContrastType = (contrastValue: number): 'black' | 'white' => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color))
    throw new Error(`invalid hex color: ${color}`);
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

export const getNumberedArray = (arr: Array<string | number>): object[]  => arr.map((value, number) => ({ value, number }));

class Obj {
  number: number;
  value: string;
}

export const toStringArray = (arr: Array<Obj>): Array<string> => arr.map(({ value, number }) => `${value}_${number}`);

class Customer {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
}

export const transformCustomers = (customers: Array<Customer>) => {
  return customers.reduce((acc: any, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as Record<number, Omit<Customer, 'id'>>);
};
