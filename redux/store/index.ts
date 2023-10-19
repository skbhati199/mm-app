// store/index.js

import { createStore, combineReducers } from 'redux';
import smsReducer from '../reducers/smsReducer';

const rootReducer = combineReducers({
  sms: smsReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
