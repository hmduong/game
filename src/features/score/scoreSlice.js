import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0,
    remainings: 16,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    resetScore: (state) => {
      state.value = 0;
      state.remainings = 16;
    },
    correct: (state) => {
      state.remainings -= 1;
    },
  },
});

export const { increment, correct, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
