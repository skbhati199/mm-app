// actions/smsActions.js

export const FETCH_SMS_MESSAGES = 'FETCH_SMS_MESSAGES';
export const STORE_SMS_MESSAGES = 'STORE_SMS_MESSAGES';

export const fetchSmsMessages = () => {
  return {
    type: FETCH_SMS_MESSAGES,
  };
};

export const storeSmsMessages = (messages) => {
  return {
    type: STORE_SMS_MESSAGES,
    messages,
  };
};
