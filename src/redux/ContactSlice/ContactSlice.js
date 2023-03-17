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
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsLoading, store => {
        store.loading = true;
      })

      .addCase(fetchAllContactsSuccess, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(fetchAddContactLoading, store => {
        store.loading = true;
      })

      .addCase(fetchAddContactSuccess, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })

      .addCase(fetchAddContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(fetchDeleteContactLoading, store => {
        store.loading = true;
      })

      .addCase(fetchDeleteContactSuccess, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })

      .addCase(fetchDeleteContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },

  // addContact: (state, action) => {
  //   state.contacts.push(action.payload);
  // },
  // deleteContact: (state, action) => {
  //   state.contacts = state.contacts.filter(
  //     contact => contact.id !== action.payload
  //   );
  // },
});

const persistConfig = { key: 'contacts', storage };

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
