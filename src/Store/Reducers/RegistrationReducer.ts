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
}
type InitStateType = typeof initialState

export const registrationReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
        case '/REGISTRATION/SET-NEW-PASSWORD':
            return {...state}
        default:
            return state
    }
};


//action
const registrationAC = (newUser: adedUserType, initUser: boolean) =>
    ({type: '/REGISTRATION/NEW-USER', newUser, initUser} as const)
const setNewPasswordAC = () => ({type: '/REGISTRATION/SET-NEW-PASSWORD'} as const)


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
        .catch((error: string) => {
            console.log(error)
        })
}
export const recoveryPasswordTC = (email: string) => (dispatch: Dispatch) => {
    const from = 'IgorSvyrydovskyi@gmail.com'
    const message = `<div style="background-color: lime; padding: 15px"> password recovery 
    link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`;
    debugger
    registerApi.passwordRecovery(email, from, message)
        .then((res) => {
            console.log(res.data.info)
        })
        .catch((error: string) => {
            console.log(error)
        })
}

//type
export type ActionType =
    | ReturnType<typeof setNewPasswordAC>
    | ReturnType<typeof registrationAC>

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
