const initialState = {
    isLoggedIn: false
}
type initialState = typeof initialState
export const loginReducer = (state:initialState = initialState, action: ActionsType): initialState => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.status}
        default:
            return state
    }
    return state
};

//actions
export const setIsLoggedInAC = (status: boolean) => {
    return {
        type: 'login/SET-IS-LOGGED-IN',
        status
    } as const
}
//thunk

//type
type ActionsType = ReturnType<typeof setIsLoggedInAC>