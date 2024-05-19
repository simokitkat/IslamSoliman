import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./features/burgerSlice";

const store = configureStore({
  reducer: {
    burger: burgerSlice,
  },
});

export default store;
