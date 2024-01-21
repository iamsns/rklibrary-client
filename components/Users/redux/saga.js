import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';
import { push } from 'next/router';
import { logoutSuccess } from '../../Auth/redux/actions';

function* usersListRequest(inputData) {

  try {
    const response = yield call(AuthService.postJsonData, "get-user-list", inputData?.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.getUsersSuccess({ ...response?.data }));
    } else {
      yield put(actions.getUsersError(response?.message));
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    const errors = error.response?.data?.errors
    if (errors?.length > 0) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

function* usersActionRequest(inputData) {
  try {
    const response = yield call(AuthService.postJsonData, "user-approval", inputData?.payload?.inputData)
    if (response?.data?.status == "OK") {
      cogoToast.success(response?.data?.message)
      yield put(actions.usersActionSuccess({ ...response?.data }));
      yield put(actions.getUsersRequest(inputData?.payload?.getReqData));
    } else {
      cogoToast.error(response?.data?.message)
      yield put(actions.usersActionError(response?.message));
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    console.log("error", error)
    const errors = error.response?.data?.errors
    if (errors?.length > 0) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

export default [
  takeLatest(actionTypes.GET_USERS_REQUEST, usersListRequest),
  takeLatest(actionTypes.USERS_ACTION_REQUEST, usersActionRequest)
]
