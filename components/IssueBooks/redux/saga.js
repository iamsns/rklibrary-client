import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actions from './actions'
import AuthService from '../../../services/authService';
import cogoToast from 'cogo-toast';
import { useRouter } from 'next/router';

function* issueBooksRequest(inputData) {
  // console.log("GET_ISSUE_BOOKS_REQUEST api called", inputData?.payload)

  try {
    const response = yield call(AuthService.getJsonData, "/issue/get-issue-books")
    // console.log("get-issue-books response", response)
    if (response?.status == 200) {
      yield put(actions.getIssueBooksSuccess({...response?.data}));
    } else {
      // console.log("response error", response)
      yield put(actions.getIssueBooksError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

function* issueNewBookRequest(inputData) {
  // console.log("ISSUE_NEW_BOOK api called", inputData?.payload)
  
  try {
    const response = yield call(AuthService.postJsonData, "/issue/issue-request", inputData?.payload)
    // console.log("issue-request response", response)
    if (response?.status == 201) {
      cogoToast.success(response?.data?.message)
      yield put(actions.issueNewBookSuccess({...response?.data}));
      // yield put(successIssueBook(response?.data?.message))
    } else {
      // console.log("response error", response)
      cogoToast.error(response?.data?.message)
      // cogoToast.error(response?.data?.message)
      // yield put(failedIssueBook(response?.data?.message))
      yield put(actions.issueNewBookError(response?.message));
    }
  } catch (error) {
    console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

function* issueActionRequest(inputData) {
  // console.log("issue action api called", inputData?.payload)

  try {
    const response = yield call(AuthService.postJsonData, "/issue/issue-action", inputData?.payload)
    // console.log("issue-action response", response)
    if (response?.status == 200) {
      yield put(actions.issueActionSuccess({...response?.data}));
      yield put(actions.getIssueBooksRequest());
    } else {
      // console.log("response error", response)
      cogoToast.success(response?.data?.message)
      yield put(actions.issueActionError(response?.message));
    }
  } catch (error) {
    // console.log("error", error)
    const errors = error.response?.data?.errors
    if ( errors?.length > 0 ) {
      cogoToast.error(errors[0]?.msg)
    }
  }
}

const successIssueBook = (msg) => {
  cogoToast.success(msg)
  const router = useRouter()
  router.push('/issue-books')
}
const failedIssueBook = (msg) => {
  
  cogoToast.error(msg)
  const router = useRouter()
  router.push('/books')
}

export default [
  takeLatest(actionTypes.GET_ISSUE_BOOKS_REQUEST, issueBooksRequest),
  takeLatest(actionTypes.ISSUE_NEW_BOOK_REQUEST, issueNewBookRequest),
  takeLatest(actionTypes.ISSUE_ACTION_REQUEST, issueActionRequest),
]
