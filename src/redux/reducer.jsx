import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};