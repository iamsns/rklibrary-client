import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { clone, mergeDeepRight } from 'ramda';
import CryptoJS from 'crypto-js';
import { ConnectedNextRouter, createRouterMiddleware } from 'connected-next-router';

import rootSaga from './saga';
import rootReducer from './rootReducer';


const secretKey = process.env.SECRET_KEY
const isEncryptionEnabled = process.env.IS_ENCRYPTION_ENABLED
const loadState = () => {
  try {

    let decryptedData = localStorage.getItem("reduxState")
    if (isEncryptionEnabled == 'true') {
      var bytes = CryptoJS.AES.decrypt(decryptedData, secretKey);
      decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } else {
      decryptedData = JSON.parse(decryptedData)
    }
    if (decryptedData == null) {
      return undefined
    }
    return decryptedData

  } catch (err) {
    console.log("error decryptedData", err);
    return undefined
  }
}

const saveState = (stateData) => {
  try {
    if (isEncryptionEnabled == 'true') {
      stateData = CryptoJS.AES.encrypt(JSON.stringify(stateData), secretKey).toString();
      localStorage.setItem("reduxState", stateData)
    } else {
      localStorage.setItem("reduxState", JSON.stringify(stateData))
    }
  } catch (error) {
    console.log("error in save state", error)
  }
}

const persistedState = loadState() || {}


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (initialState, context) => {
  const sagaMiddleware = createSagaMiddleware({
    onError(err) {
      console.log(`err in store`, err)
    },
  });
  const store = createStore(combineReducers(rootReducer), mergeDeepRight(initialState, persistedState), bindMiddleware([sagaMiddleware]));
  store.subscribe(() => {
    const state = clone(store.getState());
    saveState({ auth: state.auth, books: state.books, issueBooks: state?.issueBooks, bookDetails: state.bookDetails, usersState: state?.usersState })
  })
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = makeStore;
