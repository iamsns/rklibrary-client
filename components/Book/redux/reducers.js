import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  data: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BOOK_DETAILS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_BOOK_DETAILS_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case actionTypes.GET_BOOK_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload }
      
    default:
      return state;
  }
}

export default reducer;
