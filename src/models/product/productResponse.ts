import { Pagination } from "../pagination";
import { Sorting } from "../requests/Sorting";
import { Product } from "./product";


export type Products = {
    data: Product[];
    sorting: Sorting;
    pagination: Pagination;
}