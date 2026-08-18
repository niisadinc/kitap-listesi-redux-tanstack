import { configureStore } from "@reduxjs/toolkit";
import readingReducer from "../features/books/readingSlice";

export const store = configureStore({
  reducer: {
    reading: readingReducer,
  },
});
