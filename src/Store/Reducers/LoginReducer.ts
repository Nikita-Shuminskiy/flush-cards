import { Dispatch } from "redux";
import { api } from "../../Dal/Api";
import { setAlertList } from "./AppReducer";
import { AppThunk } from '../Store';

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state:initialState = initialState, action: LoginActionsType): initialState => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.status}
        case 'login/SET-IS-LOGOUT':
            return {...state, isLoggedIn: action.status}
        default:
            return state
    }
};

//actions
export const setIsLoggedInAC = (status: boolean) => {
    return {
        type: 'login/SET-IS-LOGGED-IN',
        status
    } as const
}
export const setIsLogoutAC = (status: boolean) => {
    return {
        type: 'login/SET-IS-LOGOUT',
        status
    } as const
}

//thunk
export const isLoginTC = (email:string, password:string,rememberMe:boolean):AppThunk => (dispatch) => {
    api.inLogin(email, password, rememberMe)
        .then((res)=>{
            dispatch(setIsLoggedInAC(true))

            //диспач экшена профайла, для получения данных с сервера
        }).catch((e) => {
            dispatch(setAlertList({id: 1, type: 'error', title:  e.response.data.error}))
    })
}
export const isLogoutTC = (logout:boolean):AppThunk => (dispatch) => {
    api.inLogout()
        .then(()=>{
            dispatch(setIsLogoutAC(logout))
        }).catch((e) => {
        console.log('Error: ',  e.response.data.error)
        dispatch(setAlertList({id: 1, type: 'error', title:  e.response.data.error}))
    })
}

//type
export type LoginActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsLogoutAC>
type initialState = typeof initialState
