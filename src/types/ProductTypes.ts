import { Category } from './CategoryTypes';
import { Filter, SortingField, SortingType } from 'src/types/FilterTypes';

export interface ProductParams {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
  category?: Category | null;
}

export interface Product {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  price: number;
  oldPrice?: number;
  category: Category | null;
  createdAt: string;
  updatedAt: string;
  commandId: string;
  categoryId?: string;
}

export interface CatalogSchema {
  products: Product[] | null;
  isLoading: boolean;
  error: string;
  hasMore: boolean;
  sortingType: SortingType;
  sortingField: SortingField;
  currentPage: number;
  pageSize: number;
}

export interface ProductsFilters extends Filter {
  categoryIds?: string[];
}

export interface ProductsRequest extends Omit<ProductsFilters, 'pagination' | 'sorting' | 'ids'> {
  pagination?: string;
  sorting?: string;
  ids?: string;
}

export type DdlItem = {
  value: string;
  label: string;
};
export type ProductFormErrors = Record<keyof Product, string>;
