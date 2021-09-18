import {RegistrationFormType} from '../../Pages/Registration/Registration';
import {registerApi} from '../../Dal/Api';
import {Dispatch} from 'redux';

type RegistrationACType = {
    newUser: adedUserType
    initUser: boolean
    type: '/REGISTRATION/NEW-USER'
}
type adedUserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
}
type InitStateType = {
    addedUser: adedUserType
    initUser: boolean
}
const initialState: InitStateType = {
    addedUser: {
        _id: '',
        email: '',
        rememberMe: false,
        isAdmin: false,
    },
    initUser: false

}


export const registrationReducer = (state = initialState, action: RegistrationActionType): InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
        case '/REGISTRATION/SET-NEW-PASSWORD':
            return {...state}
    }
    return state
};

const registrationAC = (newUser: adedUserType, initUser: boolean): RegistrationACType => ({
    type: '/REGISTRATION/NEW-USER',
    newUser,
    initUser
})
const setNewPasswordAC = () => ({type: '/REGISTRATION/SET-NEW-PASSWORD'} as const)

export const registrationTS = (data: RegistrationFormType) => (dispatch: Dispatch) => {
    registerApi.register(data).then(res => {
        dispatch(registrationAC(res.data.addedUser, true))
    }).catch((e: string) => {
        alert(e)
    })
}
export const setNewPasswordTC = ( password: string, resetPasswordToken: string ) => (dispatch: Dispatch) => {
    registerApi.setNewPassword(password,resetPasswordToken)
        .then((res) => {
            dispatch(setNewPasswordAC())
        })
        .catch((e: string) => {
            console.log(e)
        })


}
export type RegistrationActionType =
    | RegistrationACType
    | SetNewPasswordAT
export type SetNewPasswordAT = ReturnType<typeof setNewPasswordAC>
