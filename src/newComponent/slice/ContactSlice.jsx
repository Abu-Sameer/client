import { createSlice } from '@reduxjs/toolkit';
import nanoId from 'nano-id';

const ContactSlices = createSlice({
  name: 'contact',
  initialState: [
    {
      id: nanoId(),
      name: 'Yusuf',
      address: 'Kaduna',
      number: '0814053',
      email: '@mail.com',
    },
  ],
  reducers: {
    addContact(state, action) {
      const contact = {
        id: nanoId(),
        name: action.payload.name,
        address: action.payload.address,
        number: action.payload.number,
        email: action.payload.email,
      };

      state.push(contact);
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
    updateContact(state, action) {
      const { id } = action.payload;
      const contact = state.filter((contact) => contact.id !== id);
      return [...contact, action.payload];
    },
  },
});

export const selectContactById = (state, contactId) =>
  state.contacts.find((contact) => contact.id === contactId);

export const { addContact, deleteContact, updateContact } =
  ContactSlices.actions;

export default ContactSlices.reducer;
