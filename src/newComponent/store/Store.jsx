import { configureStore } from '@reduxjs/toolkit';
import ContactSlices from '../slice/ContactSlice';

const store = configureStore({
  reducer: {
    contacts: ContactSlices,
  },
});

export default store;
