import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';

function* getBookList(data) {
  try {
    const response = yield call(AuthService.postJsonData, "get-books", data.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.getBooksSuccess(response?.data));
    } else {
      yield put(actions.getBooksError(response));
    }
  } catch (error) {
    console.log("error getBookList", error)
    yield put(actions.getBooksError(error));
  }
}

export default [
  takeLatest(actionTypes.GET_BOOKS_REQUEST, getBookList)
]