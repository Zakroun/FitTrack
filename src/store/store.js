import { configureStore } from "@reduxjs/toolkit";
import { FitSlice } from "./FitSlice";
export const store = configureStore({
  reducer: FitSlice.reducer,
});
