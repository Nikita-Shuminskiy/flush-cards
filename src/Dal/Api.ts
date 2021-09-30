import axios from 'axios';
import {RegistrationFormType} from '../Pages/Registration/Registration';

const createInstance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})


export const registerApi = {
    register(data: RegistrationFormType) {
        return createInstance.post<any>('auth/register', data)
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return createInstance.post<ResponseSetNewPassword>(`auth/set-new-password`, {password, resetPasswordToken})
    },
    passwordRecovery(email: string, from: string, message: string) {
        return createInstance.post<ResponseSetNewPassword>(`auth/forgot`, {email, from, message})
    },
}


export const api = {
    inLogin(email: string, password: string, rememberMe: boolean) {
        return createInstance.post('auth/login', {email, password, rememberMe})
    },
    inLogout() {
        return createInstance.delete('auth/me')
    },
    authMe() {
        return createInstance.post('auth/me', {}).then(res => res)
    },
    changeNameOrAvatar(payload: { name: string, avatar: string }) {
        return createInstance.put(`auth/me`, payload)
    },
}
export const apiPacksCards = {
    getPacks() {
        return createInstance.get('cards/pack?&pageCount=10')
    },
    addedPack(name: string) {
        return createInstance.post('cards/pack', {cardsPack: {name}})
    },
    deletePack(id: string) {
        return createInstance.delete(`cards/pack?id=${id}`)
    },
    changedPack(name: string, _id: string) {
        return createInstance.put('cards/pack', {cardsPack: {name, _id}})
    },
    getPackPaginator(currentPage: number, pageSize: number) {

        return createInstance.get(`cards/pack?page=${currentPage}&pageCount=${pageSize}`)
    },
    getPackPrivatePaginatod(currentPage: number, pageSize: number, user_id: string) {
        return createInstance.get(`cards/pack?page=${currentPage}&pageCount=${pageSize}`, {
            params: {
                user_id: user_id,
                pageCount: 10
            }
        })
    }
}

export const packsListHelperUtils = {
    searchByName(value: string) {
        return createInstance.get(`cards/pack`, {params: {packName: value, pageCount: 13}})
    },
    getPrivatPacks(user_id: string) {
        return createInstance.get(`cards/pack`, {params: {user_id: user_id, pageCount: 4}})
    },
}

export const apiCards = {
    getCards(packId: string) {
        return createInstance.get(`cards/card?cardsPack_id=${packId}&pageCount=10`)
    },
    addCard(cardsPack_id: string,question:string , answer: string) {
        return createInstance.post('cards/card', {card: {cardsPack_id, question, answer}})
    },
    deleteCard(packId: string) {
        return createInstance.delete(`cards/card?id=${packId}`,)
    },
    changeCard(_id: string, question: string, answer: string) {
        return createInstance.put('cards/card', {card: {_id, question, answer}})
    }
}


//type
type ResponseSetNewPassword = {
    info: string
    error: string
}