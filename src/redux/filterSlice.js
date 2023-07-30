import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filter(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filter } = filterSlice.actions;

export const getFilteredNames = state => state.filter.value;
