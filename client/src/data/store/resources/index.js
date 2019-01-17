import { combineReducers } from 'redux';
import itemsReducer from './items/reducers';

export const combinedReducers = combineReducers({
  items: itemsReducer
});
