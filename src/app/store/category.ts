import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../entities/Category/Model/Category';
import { fetch_Categories } from 'src/shared/api/categories';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  try {
    const data = await fetch_Categories();
    return data;
  } catch (error) {
    return error.message;
  }
});

type initialStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  categories: Category[];
};

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    error: undefined,
    status: undefined,
  } as initialStateType,
  reducers: {
    add: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    update: (state, action: PayloadAction<Category>) => {
      state.categories.map((m) => {
        if (m.id == action.payload.id) {
          m.name = action.payload.name;
          return;
        }
      });
    },
    set: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'resolve';
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export const categoryActions = categorySlice.actions;
export const category = categorySlice.reducer;
