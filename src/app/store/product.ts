import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { FilterResponse } from 'src/types/FilterTypes';
import { createUpdateProduct, deleteProduct, fetchProducts } from 'src/shared/api/rtk/productApi';
import { CatalogSchema, Product } from 'src/types/ProductTypes';

const initialState: CatalogSchema = {
  products: null,
  isLoading: false,
  error: '',
  hasMore: false,
  currentPage: 1,
  pageSize: 4,
  sortingType: 'DESC',
  sortingField: 'createdAt',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetCatalog: (state) => {
      state.products = null;
      state.isLoading = false;
      state.error = '';
      state.hasMore = false;
      state.currentPage = 1;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number | undefined>) => {
      state.currentPage = payload ? payload : state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(fetchProducts.matchPending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.hasMore = false;
      })
      .addMatcher(
        fetchProducts.matchFulfilled,
        (
          state,
          {
            payload: {
              data,
              pagination: { pageNumber, pageSize, total },
            },
          }: PayloadAction<FilterResponse<Product>>
        ) => {
          state.products = [...(state.products && state.currentPage > 1 ? state.products : []), ...data];
          state.isLoading = false;
          state.error = '';
          state.hasMore = total > pageNumber * pageSize;
        }
      )
      .addMatcher(fetchProducts.matchRejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as unknown as string;
        state.hasMore = false;
      })
      .addMatcher(createUpdateProduct.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(createUpdateProduct.matchFulfilled, (state) => productSlice.caseReducers.resetCatalog(state))
      .addMatcher(createUpdateProduct.matchRejected, (state) => {
        state.isLoading = false;
      })
      .addMatcher(deleteProduct.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(deleteProduct.matchFulfilled, (state) => productSlice.caseReducers.resetCatalog(state))
      .addMatcher(deleteProduct.matchRejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectHasMore: (state) => state.hasMore,
    selectCurrentPage: (state) => state.currentPage,
    selectPageSize: (state) => state.pageSize,
    selectSortingType: (state) => state.sortingType,
    selectSortingField: (state) => state.sortingField,
    selectFilter: (state) => ({
      pagination: {
        pageNumber: state.currentPage,
        pageSize: state.pageSize,
      },
      sorting: {
        type: state.sortingType,
        field: state.sortingField,
      },
    }),
  },
});

export const { setCurrentPage, resetCatalog } = productSlice.actions;

export const { selectProducts, selectIsLoading, selectError, selectHasMore, selectFilter } = productSlice.selectors;

export const productReducer = productSlice.reducer;
