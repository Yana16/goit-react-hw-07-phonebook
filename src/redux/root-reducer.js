import filterReducer from '../redux/filter/filter-slice';
import contactReducer from '../redux/contacts/contact-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
