import { useRouter } from 'next/router';
import * as actionTypes from './constants';

export function getIssueBooksRequest(payload) {
    return {
      type: actionTypes.GET_ISSUE_BOOKS_REQUEST,
      payload,
    };
  }
  
  export function getIssueBooksSuccess(payload) {
    return {
      type: actionTypes.GET_ISSUE_BOOKS_SUCCESS,
      payload,
    };
  }
  
  export function getIssueBooksError(error) {
    return {
      type: actionTypes.GET_ISSUE_BOOKS_ERROR,
      error,
    };
  }

export function issueNewBookRequest(payload) {
    return {
      type: actionTypes.ISSUE_NEW_BOOK_REQUEST,
      payload,
    };
  }
  
  export function issueNewBookSuccess(payload) {
    return {
      type: actionTypes.ISSUE_NEW_BOOK_SUCCESS,
      payload,
    };
  }
  
  export function issueNewBookError(error) {
    return {
      type: actionTypes.ISSUE_NEW_BOOK_ERROR,
      error,
    };
  }

export function issueActionRequest(payload) {
    return {
      type: actionTypes.ISSUE_ACTION_REQUEST,
      payload,
    };
  }
  
  export function issueActionSuccess(payload) {
    return {
      type: actionTypes.ISSUE_ACTION_SUCCESS,
      payload,
    };
  }
  
  export function issueActionError(error) {
    return {
      type: actionTypes.ISSUE_ACTION_ERROR,
      error,
    };
  }