import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
