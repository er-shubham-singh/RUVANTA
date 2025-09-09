// src/redux/contact/contact.reducer.js
import {
  CONTACT_SUBMIT_REQUEST,
  CONTACT_SUBMIT_SUCCESS,
  CONTACT_SUBMIT_FAIL,
  CONTACT_RESET,
} from "./actionType";

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_SUBMIT_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case CONTACT_SUBMIT_SUCCESS:
      return { ...state, loading: false, success: true, data: action.payload };
    case CONTACT_SUBMIT_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    case CONTACT_RESET:
      return { ...initialState };
    default:
      return state;
  }
};
