import * as actionTypes from './constants';

export function getUsersRequest(payload) {
  return {
    type: actionTypes.GET_USERS_REQUEST,
    payload,
  };
}

export function getUsersSuccess(payload) {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload,
  };
}

export function getUsersError(error) {
  return {
    type: actionTypes.GET_USERS_ERROR,
    error,
  };
}

export function usersActionRequest(payload) {
  return {
    type: actionTypes.USERS_ACTION_REQUEST,
    payload,
  };
}

export function usersActionSuccess(payload) {
  return {
    type: actionTypes.USERS_ACTION_SUCCESS,
    payload,
  };
}

export function usersActionError(error) {
  return {
    type: actionTypes.USERS_ACTION_ERROR,
    error,
  };
}