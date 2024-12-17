// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: "",
//   reducers: {
//     setFilter(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { setFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "", // фільтр за ім'ям
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload; // змінюємо фільтр
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання фільтра за ім'ям
export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
