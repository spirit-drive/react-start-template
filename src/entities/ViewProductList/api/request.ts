import { createRandomProduct } from "../../../homeworks/ts1/3_write";

export const getProductsApi = () => {
    const limit = 3;
    let products = [];
    for (let i = 0; i < limit; i++) {
        products.push(createRandomProduct("19.09.2024"));
    }
    return products;
}