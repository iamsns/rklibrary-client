import { useRouter } from 'next/router';
import * as actionTypes from './constants';

export function getIssueBooksRequest(payload) {
  // console.log("GET_ISSUE_BOOKS req input")
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
    // console.log("GET_ISSUE_BOOKS error", error);
    return {
      type: actionTypes.GET_ISSUE_BOOKS_ERROR,
      error,
    };
  }

export function issueNewBookRequest(payload) {
  // console.log("ISSUE_NEW_BOOK req input", payload)
    return {
      type: actionTypes.ISSUE_NEW_BOOK_REQUEST,
      payload,
    };
  }
  
  export function issueNewBookSuccess(payload) {
    // console.log("issueNewBookSuccess", payload);
    const router = useRouter()
    router.push('/issue-books')
    return {
      type: actionTypes.ISSUE_NEW_BOOK_SUCCESS,
      payload,
    };
  }
  
  export function issueNewBookError(error) {
    // console.log("ISSUE_NEW_BOOK error", error);
    return {
      type: actionTypes.ISSUE_NEW_BOOK_ERROR,
      error,
    };
  }

export function issueActionRequest(payload) {
  // console.log("ISSUE_ACTION req input", payload)
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
    // console.log("ISSUE_ACTION error", error);
    return {
      type: actionTypes.ISSUE_ACTION_ERROR,
      error,
    };
  }
