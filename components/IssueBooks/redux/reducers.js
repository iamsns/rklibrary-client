import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  data : {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ISSUE_BOOKS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_ISSUE_BOOKS_SUCCESS :
        return {... state, loading : false, data : action?.payload?.data}

    case actionTypes.GET_ISSUE_BOOKS_ERROR :
        return {...state, loading:false, error : action?.payload}

    case actionTypes.ISSUE_NEW_BOOK_REQUEST:
      return { ...state, loading: true };

    case actionTypes.ISSUE_NEW_BOOK_SUCCESS :
        return {... state, loading : false, data : action?.payload}

    case actionTypes.ISSUE_NEW_BOOK_ERROR :
        return {...state, loading:false, error : action?.payload}

    case actionTypes.ISSUE_ACTION_REQUEST:
      return { ...state, loading: true };

    case actionTypes.ISSUE_ACTION_SUCCESS :
        return {... state, loading : false}

    case actionTypes.ISSUE_ACTION_ERROR :
        return {...state, loading:false, error : action?.payload}

    default:
      return state;
  }
}

export default reducer;
