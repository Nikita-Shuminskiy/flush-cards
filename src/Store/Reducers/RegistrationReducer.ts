import { RegistrationFormType } from '../../Pages/Registration/Registration';
import { registerApi } from '../../Dal/Api';
import { configAlert, setAlertList, SetAlertListType } from './AppReducer';
import { AppThunk } from '../Store';


const initialState = {
    addedUser: {
        _id: '',
        email: '',
        rememberMe: false,
        isAdmin: false,
    },
    initUser: false,
    /** Change Password */
    email: '',
    successedPassword: false,
    /** */
}

export const registrationReducer = (state = initialState, action: RegistrationActionType): InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
        case '/REGISTRATION/SET-NEW-PASSWORD':
            return {...state, successedPassword: action.successedPassword}
        case '/REGISTRATION/SET-EMAIL':
            return {...state, email: action.email}
        default:
            return state
    }
};

//action
const registrationAC = (newUser: adedUserType, initUser: boolean) =>
    ({type: '/REGISTRATION/NEW-USER', newUser, initUser} as const)
export const setNewPasswordAC = (successedPassword: boolean) => ({
    type: '/REGISTRATION/SET-NEW-PASSWORD',
    successedPassword
} as const)
export const setEmailAC = (email: string) => ({type: '/REGISTRATION/SET-EMAIL', email} as const)

//thunk
export const registrationTC = (data: RegistrationFormType): AppThunk => (dispatch) => {
    registerApi.register(data).then(res => {
        dispatch(registrationAC(res.data.addedUser, true))
    }).catch((e: string) => {
        alert(e)
    })
}
export const setNewPasswordTC = (password: string, resetPasswordToken: string): AppThunk =>
    (dispatch) => {
    registerApi.setNewPassword(password, resetPasswordToken)
        .then((res) => {
            console.log(res.data.info)
            dispatch(setNewPasswordAC(true))
        })
        .catch((error: string) => {
            dispatch(setAlertList(configAlert('error', `${error}`)))
            console.log(error)
        })
}
export const recoveryPasswordTC = (email: string): AppThunk => (dispatch) => {
    const from = 'IgorSvyrydovskyi@gmail.com'
    //   const forLocalServer = `http://localhost:3000/#/set-new-password/$token$`
    //  const forServer = `https://neko-back.herokuapp.com/2.0`
    const message = `<div style="background-color: lime; padding: 15px"> password recovery 
    link: <a href= http://localhost:3000/#/set-new-password/$token$>link</a></div>`;
    registerApi.passwordRecovery(email, from, message)
        .then((res) => {
            console.log(res.data.info)
            dispatch(setEmailAC(email))
        })
        .catch((error: string) => {
            dispatch(setAlertList(configAlert('error', `${error}`)))
            console.log(error)
        })
}

//type
export type InitStateType = typeof initialState
export type RegistrationActionType =
    | ReturnType<typeof setNewPasswordAC>
    | ReturnType<typeof registrationAC>
    | ReturnType<typeof setEmailAC>
    | SetAlertListType
type adedUserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
}
/*    export type SetNewPasswordAT = ReturnType<typeof setNewPasswordAC>*/
