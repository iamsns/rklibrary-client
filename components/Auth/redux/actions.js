import { useRouter } from 'next/router';
import * as actionTypes from './constants';

export function loginRequest(payload) {
  console.log("login input")
    return {
      type: actionTypes.LOGIN_REQUEST,
      payload,
    };
  }
  
  export function loginSuccess(payload) {
    console.log("loginSuccess", payload);
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload,
    };
  }
  
  export function loginError(error) {
    console.log("loginError", error);
    return {
      type: actionTypes.LOGIN_ERROR,
      error,
    };
  }