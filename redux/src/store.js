import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { noteReducer } from './reducers/noteReducer';
import { filterReducer } from './reducers/filterReducer';

export const store = createStore(combineReducers({
  notes: noteReducer,
  filter: filterReducer
}), composeWithDevTools());
