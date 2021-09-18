import { RegistrationFormType } from '../../Pages/Registration/Registration';
import { registerApi } from '../../Dal/Api';
import { Dispatch } from 'redux';


const initialState: InitStateType = {
    addedUser: {
        _id: '',
        email: '',
        rememberMe: false,
        isAdmin: false,
    },
    initUser: false
}


export const registrationReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
        case '/REGISTRATION/SET-NEW-PASSWORD':
            return {...state}
    }
    return state
};


//action
const registrationAC = (newUser: adedUserType, initUser: boolean) => ({ type: '/REGISTRATION/NEW-USER', newUser, initUser})
const setNewPasswordAC = () => ({type: '/REGISTRATION/SET-NEW-PASSWORD'} as const)


//thunk
export const registrationTC = (data: RegistrationFormType) => (dispatch: Dispatch) => {
    registerApi.register(data).then(res => {
        dispatch(registrationAC(res.data.addedUser, true))
    }).catch((e: string) => {
        alert(e)
    })
}//123
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    registerApi.setNewPassword(password, resetPasswordToken)
        .then((res) => {
            dispatch(setNewPasswordAC())
        })
        .catch((e: string) => {
            console.log(e)
        })
}

//type
export type ActionType =
    | ReturnType<typeof setNewPasswordAC>
    | ReturnType<typeof registrationAC>
    type InitStateType = {
        addedUser: adedUserType
        initUser: boolean
    }
    type adedUserType = {
        _id: string
        email: string
        rememberMe: boolean
        isAdmin: boolean
    }



/*    export type SetNewPasswordAT = ReturnType<typeof setNewPasswordAC>*/
