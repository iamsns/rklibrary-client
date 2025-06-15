import * as actionTypes from './constants';

export function getBooksRequest(payload) {
  // // console.log("")
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

export function getSearchBooksRequest(payload) {
  // // console.log("")
    return {
      type: actionTypes.GET_SEARCH_BOOKS_REQUEST,
      payload,
    };
  }
  
  export function getSearchBooksSuccess(payload) {
    return {
      type: actionTypes.GET_SEARCH_BOOKS_SUCCESS,
      payload,
    };
  }
  
  export function getSearchBooksError(error) {
    return {
      type: actionTypes.GET_SEARCH_BOOKS_ERROR,
      error,
    };
  }