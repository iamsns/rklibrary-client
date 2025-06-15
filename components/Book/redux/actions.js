import * as actionTypes from './constants';

export function getBookDetailsRequest(payload) {
  // console.log("getBookDetailsRequest", payload)
    return {
      type: actionTypes.GET_BOOK_DETAILS_REQUEST,
      payload,
    };
  }
  
  export function getBookDetailsSuccess(payload) {
    return {
      type: actionTypes.GET_BOOK_DETAILS_SUCCESS,
      payload,
    };
  }
  
  export function getBookDetailsError(error) {
    return {
      type: actionTypes.GET_BOOK_DETAILS_ERROR,
      error,
    };
  }