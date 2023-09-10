import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAllContacts } from './operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: bulider => 
  bulider
  .addCase(fetchAllContacts.pending, (state, action) => {
    state.isLoading = true;
    state.error = null;
  }).addCase(fetchAllContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  }).addCase(fetchAllContacts.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(addContact.pending, (state, action) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(addContact.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  })
  .addCase(addContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(deleteContact.pending, (state, action) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(deleteContact.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(
      contact => contact.id !== action.payload.id
    );
  })
  .addCase(deleteContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  }),
});

export const contactsReducer = contactsSlice.reducer;
