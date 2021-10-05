import {api} from '../../Dal/Api';
import {setIsLoggedInAC} from './LoginReducer';
import {AppThunk} from '../Store';
import {setProfileData} from './ProfileReducer';


const initialState: AppInitStateType = {
    initialApp: false,
    alertList: [],
    auth: false,
    userData: null,
    model: 'notShow',
    statusTraining: false
}
// reducer
export const AppReducer = (state: AppInitStateType = initialState, action: AppActionType): AppInitStateType => {
    switch (action.type) {
        case 'SET_ALERT':
            return {
                ...state,
                alertList: [...state.alertList, action.payload]
            }
        case "CHANGED-MODE-MODAL":
            return {
                ...state, model: action.model
            }
        case "APP/STATUS-TRAINING": {
            return {
                ...state, statusTraining: action.status
            }
        }
        case "REMOVE_ALERT":
            return {
                ...state,
                alertList: state.alertList.filter(el => el.id !== action.payload)
            }
        case 'AUTH_ME':
            return {
                ...state,
                auth: action.payload.status,
                userData: {...action.payload.userData}
            }
        case 'INIT_APP':
            return {
                ...state,
                initialApp: true
            }
        default:
            return state
    }
}

// actions
export const configAlert = (type: AlertType, message: string) => {
    return {id: new Date().getTime(), type, title: message}
}
export const setAlertList = (alert: AlertContentType) => {
    return {type: 'SET_ALERT', payload: alert} as const
}
export const removeAlert = (id: number) => {
    return {type: 'REMOVE_ALERT', payload: id} as const
}
const setAuth = (value: boolean, userData: DataUserType) => {
    return {type: 'AUTH_ME', payload: {status: value, userData}} as const
}
export const initialApp = () => {
    return {type: 'INIT_APP'} as const
}
export const changeModeModal = (model: ModelType) => {
    return {type: 'CHANGED-MODE-MODAL', model} as const
}
export const setStatusTraining = (status: boolean) => {
    return {type: 'APP/STATUS-TRAINING', status} as const
}


// thunks
export const authMe = (): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAuth(true, {email: res.data.email}))
            dispatch(initialApp())
            dispatch(setProfileData(res.data))
        })
        .catch(error => {
            dispatch(initialApp())
            setTimeout(() => dispatch(removeAlert(5)), 2000)
        })

}

//type
type AlertType = 'error' | 'success' | 'info' | 'warning'
export type AlertContentType = {
    id: number
    type: AlertType
    title: string
}
export type ModelType = 'add' | 'delete' | 'change' | 'notShow'
export type AppInitStateType = {
    initialApp: boolean
    alertList: AlertContentType[]
    auth: boolean
    userData: DataUserType | null
    model: ModelType
    statusTraining: boolean
}
export type DataUserType = {
    email: string
    avatar?: string
}
export type SetAlertListAT = ReturnType<typeof setAlertList>
export type AppActionType =
    | SetAlertListAT
    | ReturnType<typeof removeAlert>
    | ReturnType<typeof setAuth>
    | ReturnType<typeof initialApp>
    | ReturnType<typeof changeModeModal>
    | ReturnType<typeof setStatusTraining>
