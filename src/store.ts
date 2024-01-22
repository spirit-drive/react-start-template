import {DisplayProductProps} from "./types";

export type StoreType = {
    products: DisplayProductProps[];
}

const store: StoreType = {
    products: [
        {
            key: 1,
            coast: 500,
            category: 'computer',
            img: 'http://placehold.it/50x50',
            title: 'MacBook',
            description: 'amazing computer'
        },
        {
            key: 2,
            coast: 400,
            category: 'computer',
            img: 'http://placehold.it/50x50',
            title: 'HP',
            description: 'great computer'
        },
        {
            key: 3,
            coast: 300,
            category: 'computer',
            img: 'http://placehold.it/50x50',
            title: 'ACER',
            description: 'amazing computer too'
        },

    ]
}

export {store}