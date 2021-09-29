import {api} from '../../Dal/Api';
import {setIsLoggedInAC} from './LoginReducer';
import {AppThunk} from '../Store';
import {setProfileData} from './ProfileReducer';

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

export const configAlert = (type: 'error' | 'success' | 'info' | 'warning', message: string) => ({
    id: new Date().getTime(),
    type,
    title: message
})
export const setAlertList = (alert: AlertContentType) => ({type: SET_ALERT, payload: alert} as const)
export const removeAlert = (id: number) => ({type: REMOVE_ALERT, payload: id} as const)
const setAuth = (value: boolean, userData: DataUserType) =>
    ({type: AUTH_ME, payload: {status: value, userData}} as const)
const initialApp = () => ({type: INIT_APP} as const)

// thunks
export const authMe = (): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAuth(true, {email: res.data.email}))
            dispatch(initialApp())
            dispatch(setProfileData(res.data))
            dispatch(setAlertList(configAlert('success', `Пользователь: ${res.data.name}`)))
        })
        .catch(error => {
            dispatch(initialApp())
            dispatch(setAlertList({id: 5, type: 'error', title: `${error}`}))
            setTimeout(() => dispatch(removeAlert(5)), 2000)

        })

}

//type
export type AlertContentType = {
    id: number
    type: 'error' | 'success' | 'info' | 'warning'
    title: string
}
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

export type SetAuthAT = ReturnType<typeof setAuth>
export type SetAlertListAT = ReturnType<typeof setAlertList>
export type RemoveAlertAT = ReturnType<typeof removeAlert>
export type InitAppAT = ReturnType<typeof initialApp>

export type AppActionType =
    | SetAlertListAT
    | RemoveAlertAT
    | SetAuthAT
    | InitAppAT
