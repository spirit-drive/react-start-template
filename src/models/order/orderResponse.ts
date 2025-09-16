import { Pagination } from "../pagination";
import { Sorting } from "../requests/Sorting";
import { Order } from "./order";

export type OrderResponse = {
    data: Order[],
    pagination: Pagination,
    sorting: Sorting
}