import { Dispatch } from "redux";
import { api } from "../../Dal/Api";

const initialState = {
    isLoggedIn: false
}
type initialState = typeof initialState
export const loginReducer = (state:initialState = initialState, action: ActionsType): initialState => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.status}
        case 'login/SET-IS-LOGOUT':
            return {...state, isLoggedIn: action.logout}
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
export const setIsLogoutAC = (logout: boolean) => {
    return {
        type: 'login/SET-IS-LOGOUT',
        logout
    } as const
}
//type
type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsLogoutAC>


//thunk
export const isLoginTC = (email:string, password:string,rememberMe:boolean) => (dispatch: Dispatch) => {
    api.inLogin(email, password, rememberMe)
        .then((res)=>{
            dispatch(setIsLoggedInAC(true))
            console.log(res)
            //диспач экшена профайла, для получения данных с сервера
        }).catch((e) => {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ',  e.response.data.error)
    })
}
export const isLogoutTC = (logout:boolean) => (dispatch: Dispatch) => {
    api.inLogout()
        .then(()=>{
            dispatch(setIsLogoutAC(logout))
        }).catch((e) => {
        console.log('Error: ',  e.response.data.error)
    })
}