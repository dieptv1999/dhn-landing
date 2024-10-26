import axios from 'axios'
import {toast} from "@/hooks/use-toast";

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const instance = axios.create({
    baseURL: BASE_URL,
})

export default instance

const errorHandler = (error: any) => {
    toast({
        title: `${error.response.data.message}`,
        draggable: true,
        variant: 'destructive',

    })

    return Promise.reject({...error})
}

instance.interceptors.request.use(config => {
    if (localStorage && localStorage.getItem('token'))
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})

instance.interceptors.response.use(
    (response) => {

        return response
    },
    async (error) => {
        const originalRequest = error.config
        const serverCallUrl = originalRequest.url
        const status = error.response.status

        if (status === 401 && !window.location.href?.includes('/sign-in')) {
            // let token = await refreshAccessToken()
            // setAccessToken(token)

            // originalRequest._retry = true
            // originalRequest.headers.authorization = `Bearer ${token}`

            // return axios(originalRequest)
            // return errorHandler(error)
            localStorage.removeItem('token')
            window.location.href = '/auth/sign-in'
            // return errorHandler(error)
        } else return errorHandler(error)
    })