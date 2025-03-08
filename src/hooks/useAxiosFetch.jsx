import React, { useEffect } from 'react'
import axios from 'axios'

function useAxiosFetch() {
    const token = localStorage.getItem('token');
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/',
        headers: {
            Authorization: token ? `Bearer ${token}` : "" ,
        }
      }); 

      useEffect(()=>{
        const requestInterceptor = axios.interceptors.request.use( 
            function (config) {
                return config;
            }, 
            function (error) {
                return Promise.reject(error);
            }
        ) 

        const responseInterceptor = axios.interceptors.response.use(
            function (response) {
                return response;
            }, function (error) {
                return Promise.reject(error);
            }
        )

        return ()=>{
          axiosInstance.interceptors.request.eject(requestInterceptor);
          axiosInstance.interceptors.response.eject(responseInterceptor);
        }
      },[axiosInstance])
      
  return axiosInstance;
}

export default useAxiosFetch