//typs
import {Dispatch} from "redux";
import {api} from "../../Dal/Api";

const INIT_APP = 'app/INIT'
const SET_ALERT = 'app/SET_ALERT'
const REMOVE_ALERT = 'app/REMOVE_ALERT'
const AUTH_ME = 'app/AUTH_ME'

type actionType = SetAlertListType | RemoveAlertType | SetAuthType | InitApptype


type initialStateType = {
    initialApp: boolean
    alertList: AlertContentType[]
    auth: boolean
}


const initialState = {
    initialApp: false,
    alertList: [],
    auth: false,
}


// reduser
export const AppReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
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
                auth: action.payload
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

////////
type SetAlertListType = {
    type: 'app/SET_ALERT',
    payload: AlertContentType
}

export const setAlertList = (alert: AlertContentType): SetAlertListType => ({
    type: SET_ALERT,
    payload: alert
})

/////////

type RemoveAlertType = {
    type: 'app/REMOVE_ALERT'
    payload: number
}
export const removeAlert = (id: number): RemoveAlertType => ({
    type: REMOVE_ALERT,
    payload: id
})

/////////


type SetAuthType = {
    type: 'app/AUTH_ME',
    payload: boolean
}

const setAuth = (value: boolean): SetAuthType => ({
    type: AUTH_ME,
    payload: value
})

//////////


type InitApptype = {
    type: 'app/INIT'
}

const initialApp = (): InitApptype => ({type: INIT_APP})



// thunks

export const authMe = () => (dispatch: Dispatch) => {

    api.authMe()
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                dispatch(setAuth(true))
                dispatch(initialApp())
                dispatch(setAlertList(configAlert('success', `Пользователь: ${res.data.name}`)))
            }
        })
        .catch(error => {
            dispatch(initialApp())
            dispatch(setAlertList(configAlert('error', `${error}`)))
        })
}
