import { Sorting } from "./Sorting";
import { Paging } from "./Paging";

export type PageRequest = {
    pagination: Paging;
    sorting: Sorting;
};