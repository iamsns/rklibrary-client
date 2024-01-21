import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  data: {},
  searchData: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BOOKS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_BOOKS_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.GET_BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload }

    case actionTypes.GET_SEARCH_BOOKS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_SEARCH_BOOKS_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.GET_SEARCH_BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state;
  }
}

export default reducer;
