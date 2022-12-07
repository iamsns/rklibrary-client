const axios = require('axios');
const getJsonData = (endPoint) => {
  const token = localStorage.getItem("token")
  console.log("token", token)
  return axios.get('http://localhost:4044'+endPoint, {'headers' : {token : token}})
  // .get(process.env.API_URL+endPoint)
};
const postJsonData = (endPoint, body) => {
  const token = localStorage.getItem("token")
  console.log("token", token)
  return axios.post('http://localhost:4044'+endPoint, body, {'headers' : {token : token}})
    // .get(process.env.API_URL+endPoint)
};
const AuthService =  {
    getJsonData : getJsonData,
    postJsonData : postJsonData
};

export default AuthService