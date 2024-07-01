// /**
//  * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
//  * */
// export const removePlus = (string: string): string => string.replace(/^\+/, '');
//
// export const addPlus = (string: string): string => `+${string}`;
//
// export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');
//
// export const getBeautifulNumber = (value: number, separator = ' ') =>
//   value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
//
// export const round = (value: number, accuracy = 2): number => {
//   const d = 10 ** accuracy;
//   return Math.round(value * d) / d;
// };
//
// const transformRegexp =
//   /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;
//
// type transformTypeCss = {
//   x: number;
//   y: number;
// };
//
// export const getTransformFromCss = (transformCssString: string): transformTypeCss => {
//   const data = transformCssString.match(transformRegexp);
//   if (!data) return { x: 0, y: 0 };
//   return {
//     x: parseInt(data[6], 10),
//     y: parseInt(data[8], 10),
//   };
// };
//
// type FixedSizeArray<N extends number, T> = N extends 0
//   ? never[]
//   : {
//       0: T;
//       length: N;
//     } & ReadonlyArray<T>;
//
// export const getColorContrastValue = ([red, green, blue]: FixedSizeArray<3, number>): FixedSizeArray<3, number> => {
//   const contrastV = Math.round((red * 299 + green * 587 + blue * 114) / 1000);
//   return [contrastV, contrastV, contrastV] as unknown as FixedSizeArray<3, number>;
// };
//
// export const getContrastType = (contrastValue: string & number): string => (contrastValue > 125 ? 'black' : 'white');
//
// export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
// export const longColorRegExp = /^#[0-9a-f]{6}$/i;
//
// export const checkColor = (color: string): void | never => {
//   if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
// };
//
// export const hex2rgb = (color: string): Array<number> => {
//   checkColor(color);
//   if (shortColorRegExp.test(color)) {
//     const red = parseInt(color.substring(1, 2), 16);
//     const green = parseInt(color.substring(2, 3), 16);
//     const blue = parseInt(color.substring(3, 4), 16);
//     return [red, green, blue];
//   }
//   const red = parseInt(color.substring(1, 3), 16);
//   const green = parseInt(color.substring(3, 5), 16);
//   const blue = parseInt(color.substring(5, 8), 16);
//   return [red, green, blue];
// };
//
// interface NumberedArray {
//   value: string;
//   number: number;
// }
//
// export const getNumberedArray = (arr: string[]): NumberedArray[] =>
//   arr.map((value: string, number: number): NumberedArray => ({ value, number }));
// export const toStringArray = (arr: NumberedArray[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);
//
// interface ICustomer {
//   id: number;
//   name: string;
//   age: number;
//   isSubscribed: boolean;
// }
//
// interface ICustomers {
//   [id: string]: Omit<ICustomer, 'id'>;
// }
//
// export const transformCustomers = (customers: ICustomer[]): ICustomers => {
//   return customers.reduce<ICustomers>((acc, customer) => {
//     acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
//     return acc;
//   }, {});
// };
