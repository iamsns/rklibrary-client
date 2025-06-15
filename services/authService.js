const axios = require('axios');
const getJsonData = (endPoint) => {
  const reduxState = JSON.parse(localStorage.getItem("reduxState"))
  const token = reduxState?.auth?.token
  return axios.get('http://localhost:4044'+endPoint, {'headers' : {token : token}})
};
const postJsonData = (endPoint, body) => {
  const reduxState = JSON.parse(localStorage.getItem("reduxState"))
  const token = reduxState?.auth?.token
  return axios.post('http://localhost:4044'+endPoint, body, {'headers' : {token : token}})
};
const AuthService =  {
    getJsonData : getJsonData,
    postJsonData : postJsonData
};

export default AuthService
