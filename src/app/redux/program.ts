import { createSlice } from '@reduxjs/toolkit';

const programSlice = createSlice({
  name: 'program',
  initialState: {
    isLoaded: false,
  },
  reducers: {
    initialise: (state) => {
      state.isLoaded = true;
      console.log('isLoaded:' + state.isLoaded);
    },
  },
});

export const programActions = programSlice.actions;
export const program = programSlice.reducer;
