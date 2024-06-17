/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string) => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string) => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value?: string, separator = ' ') =>
    value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2) => {
    const d = 10 ** accuracy;
    return Math.round(value * d) / d;
};

const transformRegexpRe: RegExp =
    /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type Coordinates = { x: number, y: number };
export const getTransformFromCss = (transformCssString: string): Coordinates => {
    const data = transformCssString.match(transformRegexpRe);
    if (!data) return {x: 0, y: 0};
    return {
        x: parseInt(data[6], 10),
        y: parseInt(data[8], 10),
    };
};

export const getColorContrastValue = ([red, green, blue]: number[]): number =>
    // http://www.w3.org/TR/AERT#color-contrast
    Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
    if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

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

export const getNumberedArray = (arr: string[]) => arr.map((value: string, number: number): {
    value: string,
    number: number
} => ({value, number}));

type ValueNumberPair = { value: string, number: number };
export const toStringArray = (arr: ValueNumberPair[]): string[] => arr.map(({value,number}): string => `${value}_${number}`);

interface Customer {
    id?: number;
    name: string;
    age: number;
    isSubscribed: boolean;
}

type TransformCustomers = { [id: number]: Omit<Customer, "id"> };

export const transformCustomers = (customers: Customer[]): TransformCustomers => {
    return customers.reduce((acc, customer) => {
            acc[customer.id] = {
                name: customer.name,
                age: customer.age,
                isSubscribed: customer.isSubscribed,
        }
        return acc;
    }, {} as TransformCustomers);
};