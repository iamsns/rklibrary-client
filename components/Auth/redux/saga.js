import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import toast from 'react-hot-toast';

function* loginRequest(inputData) {
  // console.log("login api called", inputData?.payload)

  try {
    const response = yield call(AuthService.postJsonData, "login", inputData?.payload)
    // console.log("login response", response)
    if (response?.status == 200) {
      yield put(actions.loginSuccess({...response?.data, ...inputData}));
      toast.success("You are successfully logged in.")
    } else {
      // console.log("response error", response)
      yield put(actions.loginError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    toast.error(error.response?.data?.message)
  }
}

function* logoutRequest(inputData) {
  // console.log("logout api called", inputData?.payload)

  try {
    const response = yield call(AuthService.postJsonData, "logout", inputData?.payload)
    // console.log("logout response", response)
    if (response?.status == 200) {
      yield put(actions.logoutSuccess(response?.data));
      toast.success("You are successfully logged out.")
    } else {
      // console.log("response error", response)
      toast.error(response?.message)
      yield put(actions.logoutError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      toast.error(errors[0]?.msg)
    }
  }
}

function* signupRequest(inputData) {
  // console.log("signup api called", inputData?.payload)

  try {
    const response = yield call(AuthService.postJsonData, "register", inputData?.payload)
    // console.log("signup response", response)
    if (response?.status == 200) {
      yield put(actions.signupSuccess({...response?.data, ...inputData}));
      toast.success("Your account is successfully created!")
    } else {
      // console.log("response error", response)
      yield put(actions.signupError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      toast.error(errors[0]?.msg)
    }
  }
}

function* getTotalUsersRequest(inputData) {
  try {
    const response = yield call(AuthService.getJsonData, "getTotalUsers")
    if (response?.status == 200) {
      // console.log("response", response)
      yield put(actions.getTotalUsersSuccess(response?.data));
    } else {
      // console.log("response error", response)
      yield put(actions.getTotalUsersError(response?.data?.message));
    }
  } catch (error) {
    // console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      toast.error(errors[0]?.msg)
    }
  }
}

export default [
  takeLatest(actionTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(actionTypes.LOGOUT_REQUEST, logoutRequest),
  takeLatest(actionTypes.SIGNUP_REQUEST, signupRequest),
  takeLatest(actionTypes.GETTOTALUSERS_REQUEST, getTotalUsersRequest),
]
