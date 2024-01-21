/* global fetch */

import { all } from 'redux-saga/effects';
import authSaga from '../components/Auth/redux/saga';
import bookSaga from '../components/Books/redux/saga';
import issueBooksSaga from '../components/IssueBooks/redux/saga';
import BookDetailsSaga from '../components/Book/redux/saga';
import usersSaga from '../components/Users/redux/saga'

function* rootSaga() {
  yield all([
    ...authSaga, ...bookSaga, ...issueBooksSaga, ...BookDetailsSaga, ...usersSaga
  ]);
}

export default rootSaga;
