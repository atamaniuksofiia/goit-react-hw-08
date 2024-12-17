// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: { items: [], isLoading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (contact) => contact.id !== action.payload.id
//         );
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// Ініціалізація стану з полем filter для фільтрації контактів
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // масив контактів
    isLoading: false,
    error: null,
    filter: "", // поле для фільтрації
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload; // встановлюємо значення фільтра
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

// Селектор для фільтрації контактів за іменем
export const selectFilteredContacts = (state) => {
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};

// Експортуємо редюсери та дії
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
