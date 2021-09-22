import {RegistrationFormType} from '../../Pages/Registration/Registration';
import {registerApi} from '../../Dal/Api';
import {Dispatch} from 'redux';
import {configAlert, setAlertList, SetAlertListType} from './AppReducer';


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
type InitStateType = typeof initialState

export const registrationReducer = (state = initialState, action: ActionType): InitStateType => {
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
const setNewPasswordAC = (successedPassword: boolean) => ({
    type: '/REGISTRATION/SET-NEW-PASSWORD',
    successedPassword
} as const)
const setEmailAC = (email: string) => ({type: '/REGISTRATION/SET-EMAIL', email} as const)


//thunk
export const registrationTC = (data: RegistrationFormType) => (dispatch: Dispatch) => {
    registerApi.register(data).then(res => {
        dispatch(registrationAC(res.data.addedUser, true))
    }).catch((e: string) => {
        alert(e)
    })
}
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
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
export const recoveryPasswordTC = (email: string) => (dispatch: Dispatch) => {
    const from = 'IgorSvyrydovskyi@gmail.com'
    const message = `<div style="background-color: lime; padding: 15px"> password recovery 
    link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`;
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
export type ActionType =
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
