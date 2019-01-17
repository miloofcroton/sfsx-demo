import { createStore } from 'redux';

import { combinedReducers } from './resources';
import { composedEnhancers } from './middleware';

const store = createStore(
  combinedReducers,
  composedEnhancers
);

export default store;
