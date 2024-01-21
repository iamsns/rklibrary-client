import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  data: {},
  totalPages:null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action?.payload?.users, totalPages: action?.payload?.totalPages}

    case actionTypes.GET_USERS_ERROR:
      return { ...state, loading: false, error: action?.payload }

    case actionTypes.USERS_ACTION_REQUEST:
      return { ...state, loading: true };

    case actionTypes.USERS_ACTION_SUCCESS:
      return { ...state, loading: false, data: action?.payload }

    case actionTypes.USERS_ACTION_ERROR:
      return { ...state, loading: false, error: action?.payload }

    default:
      return state;
  }
}

export default reducer;
