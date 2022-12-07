import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  isLoggedIn:false,
  data: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };

    case actionTypes.LOGIN_SUCCESS :
      console.log("loggeeeed")
        return {loading : false, isLoggedIn:true}

    case actionTypes.LOGIN_ERROR :
        return {loading:false, error : action?.payload}
    default:
      return state;
  }
}

export default reducer;
