import axios from 'axios';
import {RegistrationFormType} from '../Pages/Registration/Registration';

const createInstance = axios.create({
    /*  baseURL: "https://neko-back.herokuapp.com/2.0"*/
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

//123
export const registerApi = {
    register(data: RegistrationFormType) {
        return createInstance.post<any>('auth/register', data)
    },
    setNewPassword(password:string, resetPasswordToken:string) {
        return createInstance.post<ResponseSetNewPassword>(`auth/set-new-password`, {password, resetPasswordToken})
    },
    passwordRecovery (email:string, from:string, message:string) {
        return createInstance.post<ResponseSetNewPassword>(`auth/forgot`, {email, from, message})
    },
}

export const api = {
    inLogin(email: string, password: string, rememberMe: boolean) {
       return createInstance.post('auth/login', {email, password, rememberMe})

    }
}




//type
type ResponseSetNewPassword = {
    info: string
    error: string
}