import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../redux/FilterSlice/FilterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistContactsReducer } from '../redux/ContactSlice/ContactSlice';

export const store = configureStore({
  reducer: { contacts: persistContactsReducer, filter: filterSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
