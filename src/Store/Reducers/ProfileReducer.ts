import { api } from "../../Dal/Api";
import { AppThunk } from "../Store";
import { initialApp, removeAlert } from "./AppReducer";

const initialState = {
    profileData: {
        _id: '',
        email: '',
        name: '',
        avatar: '' as any,
        publicCardPacksCount: null as null | number
    }
}
export type InitStateType = typeof initialState
export const profileReducer = (state: InitStateType = initialState, action: ProfileActionType): InitStateType => {
    switch (action.type) {
        case 'profile/SET-PROFILE-DATA':
            return {...state, profileData: action.payload}
        case 'profile/SET-IMAGE':
            return {...state, profileData: {...state.profileData, avatar: action.img}}
        default:
            return state
    }
};
// export const changeNameOrAvatar = (payload: { name: string, avatar: string }) =>
//     ({type: 'profile/CHANGE-NAME-OR-AVATAR', payload} as const)
export const setProfileData = (payload: ProfileDataType) => ({type: 'profile/SET-PROFILE-DATA', payload} as const)
export const setImage = (img: any) => ({type: 'profile/SET-IMAGE', img} as const)


export type ProfileDataType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: null | number
}
export type ProfileActionType =
    | ReturnType<typeof setProfileData>
    | ReturnType<typeof setImage>
    // | ReturnType<typeof changeNameOrAvatar>
export const profileUpdateFhotoTC = (image: File): AppThunk => (dispatch) => {
    api.updPhoto(image).then(res => {
        dispatch(getprofileFhotoTC())
    });
};
export const getprofileFhotoTC = (): AppThunk => (dispatch) => {
    api.getPhotoAvatar()
        .then(({data}) => {
            const blob = new Blob([data], {type : 'image/png'});
            const url = window.URL.createObjectURL(blob)
            dispatch(setImage(url))
        })
}