import { createSlice } from "@reduxjs/toolkit";

const burger = createSlice({
  name: "burger",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleBurger(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export default burger.reducer;

export const { toggleBurger } = burger.actions;
