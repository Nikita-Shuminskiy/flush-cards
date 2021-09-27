import {Dispatch} from "redux";
import {api} from "../../Dal/Api";
import {setIsLoggedInAC} from "./LoginReducer";
import { AppThunk } from '../Store';

const INIT_APP = 'app/INIT'
const SET_ALERT = 'app/SET_ALERT'
const REMOVE_ALERT = 'app/REMOVE_ALERT'
const AUTH_ME = 'app/AUTH_ME'

const initialState = {
    initialApp: false,
    alertList: [],
    auth: false,
    userData: null
}
// reducer
export const AppReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alertList: [...state.alertList, action.payload]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alertList: state.alertList.filter(el => el.id !== action.payload)
            }
        case AUTH_ME:
            return {
                ...state,
                auth: action.payload.status,
                userData: {...action.payload.userData}
            }
        case INIT_APP:
            return {
                ...state,
                initialApp: true
            }
       default:
            return state
    }
}

// actions
export type AlertContentType = {
    id: number
    type: "error" | "success" | "info" | "warning"
    title: string
}
export const configAlert = (type: "error" | "success" | "info" | "warning", message: string) => ({
    id: new Date().getTime(),
    type,
    title: message
})
export type SetAlertListType = {
    type: 'app/SET_ALERT',
    payload: AlertContentType
}
export const setAlertList = (alert: AlertContentType): SetAlertListType => ({
    type: SET_ALERT,
    payload: alert
})
export const removeAlert = (id: number): RemoveAlertType => ({
    type: REMOVE_ALERT,
    payload: id
})
const setAuth = (value: boolean, userData: DataUserType): SetAuthType => ({
    type: AUTH_ME,
    payload: {status: value, userData}
})
const initialApp = (): InitApptype => ({type: INIT_APP})

// thunks
export const authMe = ():AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            if (res.status === 200) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAuth(true, {email: res.data.email}))
                dispatch(initialApp())
                dispatch(setAlertList(configAlert('success', `Пользователь: ${res.data.name}`)))
            }
        })
        .catch(error => {
            dispatch(initialApp())
            dispatch(setAlertList(configAlert('error', `${error}`)))
        })

}

//type
export type initialStateType = {
    initialApp: boolean
    alertList: AlertContentType[]
    auth: boolean
    userData: DataUserType | null
}
export type DataUserType = {
    email: string
    avatar?: string
}
type SetAuthType = {
    type: 'app/AUTH_ME',
    payload: {
        status: boolean,
        userData: DataUserType
    }
}
type RemoveAlertType = {
    type: 'app/REMOVE_ALERT'
    payload: number
}
type InitApptype = {
    type: 'app/INIT'
}
export type AppActionType = SetAlertListType | RemoveAlertType | SetAuthType | InitApptype