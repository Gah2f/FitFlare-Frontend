import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../utilities/provider/AuthProvider'
import {useNavigate} from 'react-router-dom'
function useAxioSecure() {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const axioSecure = axios.create({
        baseURL: 'http://localhost:3000/'
    })

    useEffect(()=>{
        const requestInterceptor = axioSecure.interceptors.request.use(
            function (config) {
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`
                }
                return config;
            }, function (error) {
                return Promise.reject(error);
            }
        )

        const responseInterceptor = axioSecure.interceptors.response.use(
            function (response) {
                return response;
            }, function (error) {
                if (error.response.status === 401) {
                    logout()
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        )

        return () => {
            axioSecure.interceptors.request.eject(requestInterceptor)
            axioSecure.interceptors.response.eject(responseInterceptor)
        }
    },[logout, navigate, axioSecure])

    return axioSecure;
}

export default useAxioSecure