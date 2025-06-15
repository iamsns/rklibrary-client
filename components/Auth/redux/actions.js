import { useRouter } from 'next/router';
import * as actionTypes from './constants';

export function loginRequest(payload) {
  // console.log("login input")
    return {
      type: actionTypes.LOGIN_REQUEST,
      payload,
    };
  }
  
  export function loginSuccess(payload) {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload,
    };
  }
  
  export function loginError(error) {
    // console.log("loginError", error);
    return {
      type: actionTypes.LOGIN_ERROR,
      error,
    };
  }

export function logoutRequest(payload) {
  // console.log("logout input")
    return {
      type: actionTypes.LOGOUT_REQUEST,
      payload,
    };
  }
  
  export function logoutSuccess(payload) {
    return {
      type: actionTypes.LOGOUT_SUCCESS,
      payload,
    };
  }
  
  export function logoutError(error) {
    // console.log("logoutError", error);
    return {
      type: actionTypes.LOGOUT_ERROR,
      error,
    };
  }

export function signupRequest(payload) {
    return {
      type: actionTypes.SIGNUP_REQUEST,
      payload,
    };
  }
  
  export function signupSuccess(payload) {
    return {
      type: actionTypes.SIGNUP_SUCCESS,
      payload,
    };
  }
  
  export function signupError(error) {
    return {
      type: actionTypes.SIGNUP_ERROR,
      error,
    };
  }

export function getTotalUsersRequest(payload) {
    return {
      type: actionTypes.GETTOTALUSERS_REQUEST,
      payload,
    };
  }
  
  export function getTotalUsersSuccess(payload) {
    // console.log("payload sus", payload);
    return {
      type: actionTypes.GETTOTALUSERS_SUCCESS,
      payload,
    };
  }
  
  export function getTotalUsersError(error) {
    return {
      type: actionTypes.GETTOTALUSERS_ERROR,
      error,
    };
  }