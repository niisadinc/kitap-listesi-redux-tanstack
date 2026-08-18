import { createSlice } from "@reduxjs/toolkit";

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      const foundBook = state.list.find((book) => book.id === action.payload.id);
      if (!foundBook) {
        state.list.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
    clearList: (state) => {
      state.list = [];
    },
  },
});

export const { addBook, removeBook, clearList } = readingSlice.actions;
export default readingSlice.reducer;
