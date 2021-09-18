import { RegistrationFormType } from '../../Pages/Registration/Registration';
import { registerApi } from '../../Dal/Api';
import { Dispatch } from 'redux';

type InitStateType = {
    registrationUser:boolean
}
const initialState:InitStateType = {
   registrationUser: false
}


export const registrationReducer = (state = initialState, action: RegistrationACType):InitStateType => {
    switch (action.type) {
        case '/REGISTRATION/NEW-USER':
            return {...state, registrationUser:action.newUser}
    }
    return state
};

const registrationAC = (newUser:boolean):RegistrationACType => ({type:'/REGISTRATION/NEW-USER',newUser })

export const registrationTS = (data:RegistrationFormType) => (dispatch: Dispatch) => {
    registerApi.register(data).then(res => {
            dispatch(registrationAC(true))
    }).catch((e:string) => {
        alert(e)
    })
}

type RegistrationACType = {
    newUser:boolean
    type:'/REGISTRATION/NEW-USER'
}
