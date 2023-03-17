import { ADD_CONTACT, DELETE_CONTACT } from '../redux/types';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = [...store.contacts, action.payload];
      return { ...store, contacts: newContact };

    case DELETE_CONTACT:
      const result = store.contacts.filter(item => item.id !== action.payload);
      return { ...store, contact: result };
    default:
      return store;
  }
};

export default reducer;
