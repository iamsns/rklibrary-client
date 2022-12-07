import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';

function* loginRequest(inputData) {
  console.log("login api called", inputData?.payload)

  try {
    const response = yield call(AuthService.postJsonData, "/login", inputData?.payload)
    console.log("login response", response)
    if (response?.status == 200) {
      yield put(actions.loginSuccess(response?.data));
      localStorage.setItem("isLoggedIn", true)
      localStorage.setItem("token", response?.data?.token)
      cogoToast.success("You are successfully logged in.")
    } else {
      console.log("response error", response)
      yield put(actions.loginError(response?.message));
    }
  } catch (error) {
    console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      cogoToast.error(errors[0]?.msg)
    }
    yield put(actions.getBooksError(error));
  }
}

function* authSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_REQUEST, loginRequest)
  ])
}

export default authSaga
