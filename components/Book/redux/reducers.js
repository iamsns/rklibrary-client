import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  data: {},
  categoryDetails: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BOOK_DETAILS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_BOOK_DETAILS_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.GET_BOOK_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload }

    case actionTypes.UPDATE_BOOK_REQUEST:
      return { ...state, loading: true };

    case actionTypes.UPDATE_BOOK_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.UPDATE_BOOK_ERROR:
      return { ...state, loading: false, error: action.payload }

    case actionTypes.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categoryDetails: action.payload }

    case actionTypes.GET_CATEGORIES_ERROR:
      return { ...state, loading: false, error: action.payload }

    case actionTypes.UPDATE_CATEGORY_REQUEST:
      return { ...state, loading: true };

    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.UPDATE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state;
  }
}

export default reducer;
