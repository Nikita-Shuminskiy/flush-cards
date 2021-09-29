const initialState = {
    profileData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null as null | number
    }
}
export type InitStateType = typeof initialState
export const profileReducer = (state: InitStateType = initialState, action: ProfileActionType): InitStateType => {
    switch (action.type) {
        case 'login/SET-PROFILE-DATA':
            return {...state, profileData: action.payload}
        default:
            return state
    }
};
export const setProfileData = (payload: ProfileDataType) => ({type: 'login/SET-PROFILE-DATA', payload} as const)
export type ProfileDataType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: null | number
}
export type SetProfileDataAT = ReturnType < typeof setProfileData >
export type ProfileActionType =
    | SetProfileDataAT