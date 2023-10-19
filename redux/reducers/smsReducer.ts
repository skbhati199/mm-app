// reducers/smsReducer.js

import { FETCH_SMS_MESSAGES, STORE_SMS_MESSAGES } from '../actions/smsActions';

const initialState = {
  smsMessages: [],
};

const smsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_SMS_MESSAGES:
      return { ...state, smsMessages: action.messages };
    default:
      return state;
  }
};

export default smsReducer;
