/* global fetch */

import { all } from 'redux-saga/effects';
import authSaga from '../components/Auth/redux/saga';
import bookSaga from '../components/Books/redux/saga';

function* rootSaga() {
  yield all([
    authSaga(), bookSaga(),
  ]);
}

export default rootSaga;
