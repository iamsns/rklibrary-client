import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { getBooksRequest } from '../../Books/redux/actions';
import { logoutSuccess } from '../../Auth/redux/actions';


function* getBookDetails(data) {
  try {
    const response = yield call(AuthService.getJsonData, `book/${data.payload}`)
    if (response?.data?.status == "OK") {
      yield put(actions.getBookDetailsSuccess(response?.data?.data));
    } else {
      cogoToast.error(response?.data?.message)
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    cogoToast.error(error?.response?.data?.message)

    yield put(actions.getBookDetailsError(error));
  }
}

function* updateBook(data) {
  try {
    const response = yield call(AuthService.postJsonData, 'edit-book/', data?.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.updateBookSuccess(response?.data));
      cogoToast.success(response?.data?.message)
      yield call(() => Router.push('/books'));

    } else {
      cogoToast.error(response?.data?.message)
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
  }
}


function* getCategories(payload) {
  try {
    const response = yield call(AuthService.postJsonData, 'get-categories', payload.payload)
    if (response?.data?.status == "OK") {
      yield put(actions.getCategoriesSuccess(response?.data));
    } else {
      cogoToast.error(response?.data?.message)
    }
  } catch (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    cogoToast.error(error?.response?.data?.message)

    yield put(actions.getCategoriesError(error));
  }
}

function* updateCategory(payload) {
  try {
    const response = yield call(AuthService.postJsonData, 'edit-category', payload.payload?.inputData)
    if (response?.data?.status == "OK") {
      cogoToast.success(response?.data?.message)
      yield put(actions.updateBookSuccess(response?.data));
      yield put(actions.getCategoriesRequest({ page: payload.payload?.pagination?.page, itemPerPage: payload.payload?.pagination?.itemPerPage }));
    } else {
      cogoToast.error(response?.data?.message)
    }
  } catch (error) {
    console.log("error", error) 
    if (error.response.status == 401) {
      localStorage.clear();
      cogoToast.error(error.response?.data?.message)
      yield put(logoutSuccess());
      yield call(() => Router.push('/login'));
    }
    yield put(actions.updateCategoryError(error));
  }
}

export default [
  takeLatest(actionTypes.GET_BOOK_DETAILS_REQUEST, getBookDetails),
  takeLatest(actionTypes.UPDATE_BOOK_REQUEST, updateBook),
  takeLatest(actionTypes.GET_CATEGORIES_REQUEST, getCategories),
  takeLatest(actionTypes.UPDATE_CATEGORY_REQUEST, updateCategory),
]
