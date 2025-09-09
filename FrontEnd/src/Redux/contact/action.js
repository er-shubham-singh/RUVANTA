// src/redux/contact/contact.actions.js
import axios from "axios";
import {
  CONTACT_SUBMIT_REQUEST,
  CONTACT_SUBMIT_SUCCESS,
  CONTACT_SUBMIT_FAIL,
  CONTACT_RESET,
} from "./actionType";
import api from "../../config/api";

export const submitContact = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_SUBMIT_REQUEST });

    const { data } = await api.post("/api/contact", formData, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: CONTACT_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_SUBMIT_FAIL,
      payload:
        err.response && err.response.data
          ? err.response.data
          : { message: err.message || "Network error" },
    });
  }
};

export const resetContact = () => ({ type: CONTACT_RESET });
