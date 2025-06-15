import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';


function* getBookList(data) {
  // console.log("api called", data)
  try {
    const response = yield call(AuthService.postJsonData, "get-books", {page:1})
    // console.log("response", response)
    if (response?.status == 200) {
      yield put(actions.getBooksSuccess(response?.data));
    } else {
      yield put(actions.getBooksError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    
    yield put(actions.getBooksError(error));
  }
}

export default [
  takeLatest(actionTypes.GET_BOOKS_REQUEST, getBookList)
]
