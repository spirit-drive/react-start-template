export interface FilterDate {
  gte?: string;
  lte?: string;
}

export interface Pagination {
  pageSize?: number;
  pageNumber?: number;
}

export interface PaginationResponse extends Required<Pagination> {
  total: number;
}

export type SortingType = 'ASC' | 'DESC';
export type SortingField = 'id' | 'createdAt' | 'updatedAt' | 'name';

export interface Sorting {
  type?: SortingType;
  field?: SortingField;
}

export interface Filter {
  name?: string;
  ids?: string[];
  pagination?: Pagination;
  createdAt?: FilterDate;
  updatedAt?: FilterDate;
  sorting?: Sorting;
}

export interface FilterRequest {
  name?: string;
  ids?: string;
  pagination?: string;
  createdAt?: string;
  updatedAt?: string;
  sorting?: string;
}

export interface FilterResponse<DataType> {
  data: DataType[];
  pagination: PaginationResponse;
  sorting: Required<Sorting>;
}
