import axios from 'axios';
import { RegistrationFormType } from '../Pages/Registration/Registration';

import axios from "axios";

const createInstance = axios.create( {
  /*  url: "https://neko-back.herokuapp.com/2.0"*/
    url: "http://localhost:7542/2.0/"
})


export const registerApi = {
        register(data:RegistrationFormType){
          return  axios.post<any>("http://localhost:7542/2.0/auth/register", data).then(res => console.log(res.data))
        }
}


const registerApi1 = {

}



const registerApi2 = {

}



const instance = axios.create({
    baseURL:  "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const api = {
    inLogin(email: string, password: string, rememberMe: boolean) {
        const promise = instance.post("auth/login",{email,password, rememberMe})
        return promise
    }
}
