const axios = require('axios');
const getJsonData = (endPoint) => {
  const token = localStorage.getItem("token")
  console.log("token", token)
  return axios.get("https://rk-library-backend.onrender.com"+endPoint, {'headers' : {token : token}})
};
const postJsonData = (endPoint, body) => {
  const token = localStorage.getItem("token")
  console.log("process.env.API_URL", "https://rk-library-backend.onrender.com")
  return axios.post("https://rk-library-backend.onrender.com"+endPoint, body, {'headers' : {token : token}})
};
const AuthService =  {
    getJsonData : getJsonData,
    postJsonData : postJsonData
};

export default AuthService