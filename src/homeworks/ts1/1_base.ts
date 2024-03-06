/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string): string => string.replace(/^\+/, '');
console.log(removePlus('+Сергей'));

export const addPlus = (string: string): string => `+${string}`;
console.log(addPlus('Аида'));

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');
console.log(removeFirstZeros('000111222'));

export const getBeautifulNumber = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
console.log(getBeautifulNumber(1234567891));

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};
console.log(round(5.3232323232));

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string): { x: number; y: number } => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};
console.log(getTransformFromCss('1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1'));

export const getColorContrastValue = ([red, green, blue]: number[]): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);
console.log(getColorContrastValue([11, 12, 14]));

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');
console.log(getContrastType(100));

const shortColorRegExp = /^#[0-9a-f]{3}$/i;
const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};
//console.log(checkColor('#ADFF2Fasdfas')); // invalid hex color
console.log(checkColor('#ADFF2F')); // undefined

export const hex2rgb = (color: string): number[] => {
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
console.log(hex2rgb('#ADFF2F')); // [173, 255, 47]

export const getNumberedArray = (arr: number[]): Array<{ number: number; value: number }> =>
  arr.map((value: number, number: number): { number: number; value: number } => ({ value, number }));
console.log(getNumberedArray([1, 2, 3, 4, 5]));

export const toStringArray = (arr: string[]): string[] =>
  arr.map((value: string, number: number): string => `${value}_${number}`);
console.log(toStringArray(['1', '2', '3', '4', '5'])); // ["1_0", "2_1", "3_2", "4_3", "5_4"]

interface Customer {
  id: string;
  name: string;
  age: number;
  isSubscribed: boolean;
}

export const transformCustomers = (customers: Customer[]) => {
  return customers.reduce((acc, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as Record<string, Omit<Customer, 'id'>>);
};

const arr: Customer[] = [
  { id: '1', name: 'Дядя Вася1', age: 45, isSubscribed: true },
  { id: '2', name: 'Дядя Вася2', age: 46, isSubscribed: false },
  { id: '3', name: 'Дядя Вася3', age: 47, isSubscribed: true },
  { id: '4', name: 'Дядя Вася4', age: 48, isSubscribed: false },
  { id: '5', name: 'Дядя Вася5', age: 49, isSubscribed: true },
];
console.log(transformCustomers(arr));
