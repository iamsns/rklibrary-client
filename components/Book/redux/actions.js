import * as actionTypes from './constants';

export function getBookDetailsRequest(payload) {
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

export function updateBookRequest(payload) {
    return {
      type: actionTypes.UPDATE_BOOK_REQUEST,
      payload,
    };
  }
  
  export function updateBookSuccess(payload) {
    return {
      type: actionTypes.UPDATE_BOOK_SUCCESS,
      payload,
    };
  }
  
  export function updateBookError(error) {
    return {
      type: actionTypes.UPDATE_BOOK_ERROR,
      error,
    };
  }

export function getCategoriesRequest(payload) {
    return {
      type: actionTypes.GET_CATEGORIES_REQUEST,
      payload,
    };
  }
  
  export function getCategoriesSuccess(payload) {
    return {
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload,
    };
  }
  
  export function getCategoriesError(error) {
    return {
      type: actionTypes.GET_CATEGORIES_ERROR,
      error,
    };
  }

export function updateCategoryRequest(payload) {
    return {
      type: actionTypes.UPDATE_CATEGORY_REQUEST,
      payload,
    };
  }
  
  export function updateCategorySuccess(payload) {
    return {
      type: actionTypes.UPDATE_CATEGORY_SUCCESS,
      payload,
    };
  }
  
  export function updateCategoryError(error) {
    return {
      type: actionTypes.UPDATE_CATEGORY_ERROR,
      error,
    };
  }