import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
const axios = require('axios');

import { selectToken } from '../components/Auth/redux/selectors';

const secretKey = process.env.SECRET_KEY
const apiUrl = process.env.API_URL
const isEncryptionEnabled = process.env.IS_ENCRYPTION_ENABLED

const getJsonData = (endPoint) => {
  
  let decryptedData = localStorage.getItem("reduxState")
  if (isEncryptionEnabled=='true') {
    var bytes = CryptoJS.AES.decrypt(decryptedData, secretKey);
    decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } else {
    decryptedData = JSON.parse(decryptedData)
  }
  
  const token = decryptedData?.auth?.token
  return axios.get(apiUrl + endPoint, { 'headers': { token: token } })
};
const postJsonData = (endPoint, body) => {

  let decryptedData = localStorage.getItem("reduxState")
  if (isEncryptionEnabled=='true') {
    var bytes = CryptoJS.AES.decrypt(decryptedData, secretKey);
    decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } else {
    decryptedData = JSON.parse(decryptedData)
  }

  const token = decryptedData?.auth?.token
  return axios.post(apiUrl + endPoint, body, { 'headers': { token: token } })
};
const AuthService = {
  getJsonData: getJsonData,
  postJsonData: postJsonData
};


export default AuthService