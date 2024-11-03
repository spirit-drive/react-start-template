import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AppSchema {
  isInit: boolean;
}

const initialState: AppSchema = {
  isInit: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAppInit: (state, { payload }: PayloadAction<boolean>) => {
      state.isInit = payload;
    },
  },
  selectors: {
    selectIsAppInit: (state) => state.isInit,
  },
});

export const { setIsAppInit } = appSlice.actions;
export const { selectIsAppInit } = appSlice.selectors;
export const appReducer = appSlice.reducer;
