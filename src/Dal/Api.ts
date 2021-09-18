import axios from 'axios';
import {RegistrationFormType} from '../Pages/Registration/Registration';

const createInstance = axios.create({
    /*  url: "https://neko-back.herokuapp.com/2.0"*/
    baseURL: 'http://localhost:7542/2.0/'
})


export const registerApi = {
    register(data: RegistrationFormType) {
        return createInstance.post<any>('auth/register', data)
    },
    setNewPassword(password:string, resetPasswordToken:string) {
        return createInstance.post<ResponseSetNewPassword>(`auth/set-new-password`, {password, resetPasswordToken})
    },
}


const registerApi1 = {}


const registerApi2 = {}


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const api = {
    inLogin(email: string, password: string, rememberMe: boolean) {
        const promise = instance.post('auth/login', {email, password, rememberMe})
        return promise
    }
}

type ResponseSetNewPassword = {
    info: string
    error: string
}