
import axios from "axios";



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
