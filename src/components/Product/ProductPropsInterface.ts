export interface ProductProps {
    product: {
        id: number,
        name: string,
        photos: string[],
        desc: string,
        createAt: string,
        oldPrice: number,
        price: number,
        category: {
            id: number,
            name: string,
            photo: string,
        },
        properties: {
            hit: string,
            new: string,
        },
    },
};