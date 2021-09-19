import {RegistrationFormType} from '../../Pages/Registration/Registration';
import {registerApi} from '../../Dal/Api';
import {Dispatch} from 'redux';


const initialState = {
    addedUser: {
        _id: '',
        email: '',
        rememberMe: false,
        isAdmin: false,
    },
    initUser: false,
    token: '',
}
type InitStateType = typeof initialState

export const registrationReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
        case '/REGISTRATION/SET-NEW-PASSWORD':
            return {...state}
        case '/REGISTRATION/SET-NEW-TOKEN':
            return {...state, token: action.token }
        default:
            return state
    }
};


//action
const registrationAC = (newUser: adedUserType, initUser: boolean) =>
    ({type: '/REGISTRATION/NEW-USER', newUser, initUser} as const)
const setNewPasswordAC = () => ({type: '/REGISTRATION/SET-NEW-PASSWORD'} as const)
const setNewTokenAC = (token: string) => ({type: '/REGISTRATION/SET-NEW-TOKEN', token} as const)


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
            dispatch(setNewPasswordAC())
        })
        .catch((e: string) => {
            console.log(e)
        })
}
export const recoveryPasswordTC = (email: string, token: string) => (dispatch: Dispatch) => {
    const from = 'IgorSvyrydovskyi@gmail.com'
    const message = `<div style="background-color: lime; padding: 15px"> password recovery 
    link: <a href='http://localhost:3000/#/set-new-password/${token}'>link</a></div>`;
    registerApi.passwordRecovery(email, from, message)
        .then((res) => {
            console.log(res.data.info)
            dispatch(setNewTokenAC(token))
        })
        .catch((e: string) => {
            console.log(e)
        })
}

//type
export type ActionType =
    | ReturnType<typeof setNewPasswordAC>
    | ReturnType<typeof registrationAC>
    | ReturnType<typeof setNewTokenAC>

/** оператор typeof  */
// type InitStateType = {
//     addedUser: adedUserType
//     initUser: boolean
// }

type adedUserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
}


/*    export type SetNewPasswordAT = ReturnType<typeof setNewPasswordAC>*/
