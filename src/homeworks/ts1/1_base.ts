/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (value: string): string => value.replace(/^\+/, '');

export const addPlus = (value: string): string => `+${value}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator: string = ' '): string =>
    value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number = 2): number => {
    const d: number = 10 ** accuracy;
    return Math.round(value * d) / d;
};

const transformRegexp =
    /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export class Point {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    x: number;
    y: number;

    static getDefaultPoint(): Point {
        return new Point(0, 0);
    }
}

export const getTransformFromCss = (transformCssString: string): Point => {

    const data = transformCssString.match(transformRegexp);

    let result: Point;

    if (data) {
        result = new Point(parseInt(data[6], 10), parseInt(data[8], 10));
    } else {
        result = Point.getDefaultPoint();
    }
    return result;
};

export const getColorContrastValue = ([red, green, blue]: number[]): number =>
    // http://www.w3.org/TR/AERT#color-contrast
    Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number) => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
    if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): number[] => {

    checkColor(color);

    let red: number;
    let green: number;
    let blue: number;

    if (shortColorRegExp.test(color)) {
        red = parseInt(color.substring(1, 2), 16);
        green = parseInt(color.substring(2, 3), 16);
        blue = parseInt(color.substring(3, 4), 16);
    } else {
        red = parseInt(color.substring(1, 3), 16);
        green = parseInt(color.substring(3, 5), 16);
        blue = parseInt(color.substring(5, 8), 16);
    }
    return [red, green, blue];
};

export class ArrayItem<T> {
    constructor(value: T, index: number) {
        this.value = value;
        this.index = index;
    }

    index: number;
    value: T;
}

//Сделал через function потому что подсветка перестала работать, если функцию указывать как лямбда-выражение.
export const getNumberedArray = function <T>(arr: T[]): ArrayItem<T>[] {
    return arr.map((value: T, index: number) => new ArrayItem<T>(value, index));
}

export const toStringArray = function <T>(arr: ArrayItem<T>[]): string[] {
    return arr.map((item: ArrayItem<T>) => `${item.value}_${item.index}`);
}

export class Customer {
    id: number;
    name: string;
    age: number;
    isSubscribed: boolean;
}

export const transformCustomers = (customers: Customer[]): { [id: number]: Customer } => {
    return customers.reduce((acc: { [id: number]: Customer }, customer: Customer) => {
        acc[customer.id] = customer;
        return acc;
    }, {});
};
