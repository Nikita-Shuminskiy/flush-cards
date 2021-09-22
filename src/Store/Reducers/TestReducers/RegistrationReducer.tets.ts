import {InitStateType, registrationReducer, setEmailAC, setNewPasswordAC} from '../RegistrationReducer';

let startState: InitStateType


beforeEach(() => {
    startState = {
        addedUser: {
            _id: '',
            email: '',
            rememberMe: false,
            isAdmin: false,
        },
        initUser: false,
        email: '',
        successedPassword: false,
    }
})
test('correct work setNewPasswordAC action', () => {

    const stateEnd = registrationReducer(startState, setNewPasswordAC(true))

     expect(stateEnd).toBeTruthy()
})
test('correct work setEmailAC action', () => {

    const stateEnd = registrationReducer(startState, setEmailAC('qwerty'))

    expect(stateEnd.email.length).toBe(6)
    expect(stateEnd.email).toEqual('qwerty')
})