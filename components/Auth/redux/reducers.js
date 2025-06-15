import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  error: false,
  isLoggedIn:false,
  token: null,
  email: null,
  totalUsers : null,
  role : null,
  userData : null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };

    case actionTypes.LOGIN_SUCCESS :
      // console.log("payload login", action?.payload)
        return {... state, loading : false, isLoggedIn:true, token : action?.payload?.token, email: action?.payload?.user?.email, role : action?.payload?.user?.role, userData : action?.payload?.user}

    case actionTypes.LOGIN_ERROR :
        return {...state, loading:false, error : action?.payload}

    case actionTypes.LOGOUT_REQUEST:
      return { ...state, loading: true };

    case actionTypes.LOGOUT_SUCCESS :
        return {...state, loading : false, isLoggedIn:false, token : null, email : null, role:null,userData:null}

    case actionTypes.LOGOUT_ERROR :
        return {...state, loading:false, error : action?.payload}
        
    case actionTypes.SIGNUP_REQUEST:
      return { ...state, loading: true };

    case actionTypes.SIGNUP_SUCCESS :
        return {...state, loading : false, isLoggedIn: true, token : action?.payload?.token, email: action?.payload?.user?.email, role : action?.payload?.user?.role, userData : action?.payload?.user}

    case actionTypes.SIGNUP_ERROR :
        return {...state, loading:false, error : action?.payload}
        
    case actionTypes.GETTOTALUSERS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.GETTOTALUSERS_SUCCESS :
      // console.log("payload GETTOTALUSERS_SUCCESS", action?.payload)
        return {...state, loading : false, totalUsers : action?.payload?.totalUser}

    case actionTypes.GETTOTALUSERS_ERROR :
        return {...state, loading:false, error : action?.payload}
        
    default:
      return state;
  }
}

export default reducer;
