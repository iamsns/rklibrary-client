import * as actionTypes from './constants';

export function getBooksRequest(payload) {
    return {
      type: actionTypes.GET_BOOKS_REQUEST,
      payload,
    };
  }
  
  export function getBooksSuccess(payload) {
    return {
      type: actionTypes.GET_BOOKS_SUCCESS,
      payload,
    };
  }
  
  export function getBooksError(error) {
    return {
      type: actionTypes.GET_BOOKS_ERROR,
      error,
    };
  }