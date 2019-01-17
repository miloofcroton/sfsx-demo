import { combineReducers } from 'redux';
import ordersReducer from './orders/reducers';

export const combinedReducers = combineReducers({
  orders: ordersReducer
});
