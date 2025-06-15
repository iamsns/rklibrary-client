import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { clone, pathOr, mergeDeepRight } from 'ramda';

import rootSaga from './saga';
import rootReducer from './rootReducer';

const loadState = () => {
  try {
    const reduxState = JSON.parse(localStorage.getItem("reduxState"))
    if (reduxState == null) {
      return undefined
    }
    return reduxState

  } catch (err) {
    return undefined
  }
}

const saveState = (stateData) => {
  try {
    stateData && localStorage.setItem("reduxState", JSON.stringify(stateData))
  } catch (error) {
      // console.log("error in save state", error)
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
        // console.log(`err in saga`, err)
    },
  });
  const store = createStore(combineReducers(rootReducer), mergeDeepRight(initialState, persistedState), bindMiddleware([sagaMiddleware]));
  store.subscribe(()=>{
    const state = clone(store.getState());
    saveState({auth : state.auth, books: state.books, issueBooks: state?.issueBooks, bookDetails: state.bookDetails})
  })
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = makeStore;
