import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as actions from '../../redux/actions';

const initialState = {
  name: '',
  number: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    [actions.fetchAllContactsLoading]: store => {
      store.loading = true;
    },

    [actions.fetchAllContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },

    [actions.fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [actions.fetchAddContactLoading]: store => {
      store.loading = true;
    },

    [actions.fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },

    [actions.fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [actions.fetchDeleteContactLoading]: store => {
      store.loading = true;
    },

    [actions.fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },

    [actions.fetchDeleteContactError]: (store, { payload }) => {
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
