import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';
import Router, { push } from 'next/router';

function* loginRequest(inputData) {
  try {
    const response = yield call(AuthService.postJsonData, "login", inputData?.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.loginSuccess({ ...response?.data, ...inputData }));
      cogoToast.success("You are successfully logged in.")
    } else {
      yield put(actions.loginError(response?.message));
    }
  } catch (error) {
    cogoToast.error(error.response?.data?.message)
  }
}

function* logoutRequest(inputData) {
  try {
    const response = yield call(AuthService.postJsonData, "logout", inputData?.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.logoutSuccess(response?.data));
      cogoToast.success("You are successfully logged out.")
    } else {
      cogoToast.error(response?.message)
      yield put(actions.logoutError(response?.message));
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(actions.logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    const errors = error.response?.data?.errors
    if (errors?.length > 0) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

function* signupRequest(inputData) {
  try {
    const response = yield call(AuthService.postJsonData, "register", inputData?.payload)
    if (response?.data?.status == "OK") {
      cogoToast.success(response?.data?.message)
      if (inputData?.payload?.role == 'READER') {
        yield put(actions.signupSuccess({ ...response?.data, ...inputData }));
      } else {
        yield call(() => Router.push('/'));
      }
    } else {
      yield put(actions.signupError(response?.data?.message));
    }
  } catch (error) {
    const errors = error.response?.data?.errors
    if (errors?.length > 0) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

function* getTotalUsersRequest(inputData) {
  try {
    const response = yield call(AuthService.getJsonData, "getTotalUsers")
    if (response?.data?.status == "OK") {
      yield put(actions.getTotalUsersSuccess(response));
    } else {
      yield put(actions.getTotalUsersError(response?.data?.message));
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(actions.logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    const errors = error.response?.data?.errors
    if (errors?.length > 0) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

export default [
  takeLatest(actionTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(actionTypes.LOGOUT_REQUEST, logoutRequest),
  takeLatest(actionTypes.SIGNUP_REQUEST, signupRequest),
  takeLatest(actionTypes.GETTOTALUSERS_REQUEST, getTotalUsersRequest),
]