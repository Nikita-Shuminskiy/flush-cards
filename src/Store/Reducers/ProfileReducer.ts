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
        case 'profile/SET-PROFILE-DATA':
            return {...state, profileData: action.payload}
        default:
            return state
    }
};
// export const changeNameOrAvatar = (payload: { name: string, avatar: string }) =>
//     ({type: 'profile/CHANGE-NAME-OR-AVATAR', payload} as const)
export const setProfileData = (payload: ProfileDataType) => ({type: 'profile/SET-PROFILE-DATA', payload} as const)


export type ProfileDataType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: null | number
}
export type SetProfileDataAT = ReturnType<typeof setProfileData>
export type ProfileActionType =
    | SetProfileDataAT
    // | ReturnType<typeof changeNameOrAvatar>