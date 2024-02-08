import {Product} from "../types/cardProductTypes";

export const priceFormat = (number: number | string, thousandsSeparator: string = ' ') => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
);

export const generateRandomProducts = (numberOfNewProducts: number): Product[] => {
    const name = ['Телефон', 'Ноутбук', 'Телевизор', 'Холодильник'];
    const images = ['/images/phone.jpg', '/images/laptop.jpg', '/images/tv.jpg', '/images/fridge.jpg'];
    const description = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';
    const products = [];

    for (let i = 0; i < numberOfNewProducts; i++) {
        const nameIndex = Math.floor(Math.random() * name.length);

        products.push({
            id: Math.floor(Math.random() * 100000),//Math.floor(Math.random() * 100).toString() + nameIndex,
            name: `${name[nameIndex]} ${Math.floor(Math.random() * 1000)}`,
            price: Math.floor(Math.random() * 100000),
            description: description,
            image: [images[nameIndex]],
        });
    }

    return products;
}