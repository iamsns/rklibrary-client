const axios = require('axios');
const getJsonData = (endPoint) => {
  const reduxState = JSON.parse(localStorage.getItem("reduxState"))
  const token = reduxState?.auth?.token
  console.log("DFSD", process.env.NEXT_PUBLIC_API_URL)
  return axios.get(process.env.NEXT_PUBLIC_API_URL+endPoint, {'headers' : {token : token}})
};
const postJsonData = (endPoint, body) => {

  console.log("DFSD", process.env.REACT_APP_API_URL)
  const reduxState = JSON.parse(localStorage.getItem("reduxState"))
  const token = reduxState?.auth?.token
  return axios.post(process.env.NEXT_PUBLIC_API_URL+endPoint, body, {'headers' : {token : token}})
};
const AuthService =  {
    getJsonData : getJsonData,
    postJsonData : postJsonData
};

export default AuthService
