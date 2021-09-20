//typs
const SET_ALERT = 'app/SET_ALERT'
const REMOVE_ALERT = 'app/REMOVE_ALERT'

type actionType = SetAlertListType | RemoveAlertType


type initialStateType = {
    initialApp: boolean
    alertList: AlertContentType[]
}


const initialState = {
    initialApp: false,
    alertList: []

}


// reducer
export const AppReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {

        case SET_ALERT:
            return {
                ...state,
                alertList: [...state.alertList, action.payload]
            }

        case REMOVE_ALERT:
            return {
                ...state,
                alertList: state.alertList.filter(el => el.id !== action.payload)
            }


        default:
            return state
    }
}

// actions



export type AlertContentType = {
    id: any
    type: "error" | "success" | "info" | "warning"
    title: string
}

export const configAlert = (type: "error" | "success" | "info" | "warning", message: string) => ({
    id: new Date(),
    type,
    title: message
})

////////
type SetAlertListType = {
    type: 'app/SET_ALERT',
    payload: AlertContentType
}

export const setAlertList = (alert: AlertContentType): SetAlertListType => ({
    type: SET_ALERT,
    payload: alert
})

/////////

type RemoveAlertType = {
    type: 'app/REMOVE_ALERT'
    payload: string
}
export const removeAlert = (id: string): RemoveAlertType => ({
    type: REMOVE_ALERT,
    payload: id
})




// thunks


