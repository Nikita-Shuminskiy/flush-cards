import { RegistrationFormType } from '../../Pages/Registration/Registration';
import { registerApi } from '../../Dal/Api';
import { Dispatch } from 'redux';

type RegistrationACType = {
    newUser:adedUserType
    initUser:boolean
    type:'/REGISTRATION/NEW-USER'
}
type adedUserType = {
    _id:string
    email:string
    rememberMe:boolean
    isAdmin:boolean
}
type InitStateType = {
    addedUser: adedUserType
    initUser:boolean
}
const initialState:InitStateType = {
        addedUser: {
                _id: "",
                email: "",
                rememberMe: false,
                isAdmin: false,
            },
        initUser:false

}


export const registrationReducer = (state = initialState, action: RegistrationACType):InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, addedUser: action.newUser, initUser: action.initUser}
    }
    return state
};

const registrationAC = (newUser:adedUserType, initUser:boolean):RegistrationACType => ({type:'/REGISTRATION/NEW-USER',  newUser , initUser })

export const registrationTS = (data:RegistrationFormType) => (dispatch: Dispatch) => {
    registerApi.register(data).then(res => {
            dispatch(registrationAC(res.data.addedUser,true))
    }).catch((e:string) => {
        alert(e)
    })
}


