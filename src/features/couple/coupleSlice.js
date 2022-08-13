import { createSlice } from '@reduxjs/toolkit';

export const coupleSlice = createSlice({
  name: 'couple',
  initialState: {
    value: [],
  },
  reducers: {
    subscribeCouple: (state, action) => {
      state.value.push(action.payload);
    },
    resetCouple: (state) => {
      state.value = [];
    },
  },
});

export const { subscribeCouple, resetCouple } = coupleSlice.actions;

export default coupleSlice.reducer;
