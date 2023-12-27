export const priceFormat = (number: number | string, thousandsSeparator: string = ' ') => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
);