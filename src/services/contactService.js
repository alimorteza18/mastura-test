'use client'

import { message } from "antd";
import axios from "axios";

if (typeof window !== 'undefined') {
   axios.defaults.headers["Authorization"]='Bearer ' + localStorage.getItem('token')
}
 export const URL = "http://185.173.107.148:8090/api";
// export const URL = "http://185.113.9.246:8082/api";
//http://185.113.9.246:8082
// ${localStorage.getItem('token')}
//http://185.173.107.148:8090/api
// Login User
export const login = (mobile) => {
  console.log(mobile,'mobile')
  if(mobile?.mobile.length<11){
    message.error('طول شماره همراه باید 11 رقم باشد.')
  } else {
    const url = `${URL}/Authentications/Login`;
    message.success('کد تایید برای شما پیامک شد.')
    return axios.post(url, mobile)
  }
    
  };

  // Confirm Code

  // export const confirmCode = (confirmCode) => {
  //   const url = `${URL}/Authentications/ConfirmLogin`;
  //   return axios.post(url, confirmCode);
  // };

  //Get Road
  export const GetRoad = () => {
    const url = `${URL}/Ayat/GetRoad`;
    return axios.get(url)
  };

   //Get Single Road
   export const getSingleRoad = (id) => {
    const url = `${URL}/Ayat/GetOneAye?AyeId=${id}`;
    return axios.get(url);
  }

  // // Get User Profile Data
  // export const getuserData = () => { 
    
  // }