import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';
import Router, { useRouter, push } from 'next/router';
import { logoutSuccess } from '../../Auth/redux/actions';

function* issueBooksRequest(inputData) {

  try {
    const response = yield call(AuthService.postJsonData, "issue/get-issue-books", { page: inputData?.payload })
    if (response?.data?.status == "OK") {
      yield put(actions.getIssueBooksSuccess({ ...response?.data }));
    } else {
      yield put(actions.getIssueBooksError(response?.message));
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

function* issueNewBookRequest(inputData) {

  try {
    const response = yield call(AuthService.postJsonData, "issue/issue-request", inputData?.payload)
    if (response?.data?.status == "OK") {
      cogoToast.success(response?.data?.message)
      yield put(actions.issueNewBookSuccess({ ...response?.data }));
      yield call(() => Router.push('/issue-books'));
    } else {
      cogoToast.error(response?.data?.message)
      yield put(actions.issueNewBookError(response?.message));
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

function* issueActionRequest(inputData) {

  try {
    const response = yield call(AuthService.postJsonData, "issue/issue-action", inputData?.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.issueActionSuccess({ ...response?.data }));
      yield put(actions.getIssueBooksRequest());
    } else {
      cogoToast.success(response?.data?.message)
      yield put(actions.issueActionError(response?.message));
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

export default [
  takeLatest(actionTypes.GET_ISSUE_BOOKS_REQUEST, issueBooksRequest),
  takeLatest(actionTypes.ISSUE_NEW_BOOK_REQUEST, issueNewBookRequest),
  takeLatest(actionTypes.ISSUE_ACTION_REQUEST, issueActionRequest),
]
