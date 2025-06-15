import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';


function* getBookDetails(data) {
  try {
    const response = yield call(AuthService.getJsonData, `/book/${data.payload}`)
    // console.log("response", response)
    if (response?.status == 200) {
      yield put(actions.getBookDetailsSuccess(response?.data?.data));
    } else {
      yield put(actions.getBookDetailsError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    
    yield put(actions.getBookDetailsError(error));
  }
}

export default [
  takeLatest(actionTypes.GET_BOOK_DETAILS_REQUEST, getBookDetails)
]
