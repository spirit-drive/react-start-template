export interface ProductProps {

    /**
     * Информация об одном товаре
     */
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