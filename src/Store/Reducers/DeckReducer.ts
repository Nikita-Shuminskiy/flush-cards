import {api, apiPack} from "../../Dal/Api";
import {Dispatch} from "redux";
import {setAlertList} from "./AppReducer";


export type CardPackType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number
}
const initialState = {
    cardPacks: [] as Array<CardPackType>
}


export type DeckInitStateType = typeof initialState

export const deckReducer = (state: DeckInitStateType = initialState, action: ActionType): DeckInitStateType => {

    switch (action.type) {
        case "GET-CARD": {
            return {...state, cardPacks: action.packs}
        }
        case "DELETE-PACKS-CARD": {
            return {
                ...state,
                cardPacks: state.cardPacks.filter(el => el._id !== action.id)
            }
        }
        case "CHANGE-NAME-PACK":{
            return {...state,
                cardPacks: state.cardPacks.map(el=> el._id === action.id ? {...el, name : action.name} : el )
            }
        }
        default:
            return state
    }
}
//actions
export const getPacksCard = (packs: Array<CardPackType>) => {
    return {type: 'GET-CARD', packs} as const
}
export const deletePacksCard = (id: string) => {
    return {type: 'DELETE-PACKS-CARD', id} as const
}
export const changeNamePack = (id: string, name: string) => {
    return {type: 'CHANGE-NAME-PACK', id, name} as const
}

//type
type GetCardTypeAC = ReturnType<typeof getPacksCard>
type DeletePacksCard = ReturnType<typeof deletePacksCard>
type ChangeNamePackType = ReturnType<typeof changeNamePack>
export type ActionType =
    | GetCardTypeAC
    | DeletePacksCard
    | ChangeNamePackType

//thunk
export const getPacksCardTC = () => (dispach: Dispatch) => {
    api.authMe()
        .then(res => {
            apiPack.getPacks()
                .then((res) => {
                    dispach(getPacksCard(res.data.cardPacks))
                })
        })
        .catch((error) => {
            console.log('bad response')
        })
}
export const deletePacksCardTC = (id: string) => (dispatch: Dispatch) => {
    apiPack.deletePack(id)
        .then((res) => {
            dispatch(deletePacksCard(id))
            dispatch(setAlertList({id: 1, type: 'success', title: 'Ваша колода удалена'}))
            apiPack.getPacks()
                .then((res) => {
                    dispatch(getPacksCard(res.data.cardPacks))
                })
                .catch((error)=> {
                })
        })
        .catch((error)=>{
            dispatch(setAlertList({id: 1, type: 'error', title: 'Удалять можно только свои колоды'}))
        })


}
export const changedNamePackTC = (newName: string, id: string) => (dispatch: Dispatch) => {
    apiPack.changedPack(newName, id)
        .then((res) => {
            dispatch(changeNamePack(id, newName))

        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'Нельзя изменить чужую колоду'}))
        })
}
