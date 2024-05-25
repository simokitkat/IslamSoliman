import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./features/burgerSlice";
import formSlice from "./features/formSlice";

const store = configureStore({
  reducer: {
    burger: burgerSlice,
    form: formSlice,
  },
});

export default store;
