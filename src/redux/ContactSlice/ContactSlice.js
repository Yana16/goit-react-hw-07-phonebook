import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from '../../redux/actions';

const initialState = {
  name: '',
  number: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.loading = true;
    },

    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },

    [fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchAddContactLoading]: store => {
      store.loading = true;
    },

    [fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },

    [fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchDeleteContactLoading]: store => {
      store.loading = true;
    },

    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },

    [fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
});

const persistConfig = { key: 'contacts', storage };

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
