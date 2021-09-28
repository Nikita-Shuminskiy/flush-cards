import {api, apiPack, packsListHelperUtils} from '../../Dal/Api';
import {Dispatch} from 'redux';
import {AppThunk} from '../Store';


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
    'cardPacks': [] as Array<CardPackType>,
    /** search */
}
export type DeckInitStateType = typeof initialState

export const deckReducer = (state = initialState, action: DeckActionType): DeckInitStateType => {

    switch (action.type) {
        case 'GET-CARD': {
            return {...state, cardPacks: action.packs}
        }
        default:
            return state
    }
}
//actions
export const getCard = (packs: Array<CardPackType>) => {
    return {type: 'GET-CARD', packs} as const
}
//type
type GetCardTypeAC = ReturnType<typeof getCard>
export type DeckActionType =
    | GetCardTypeAC
//thunk
export const testTC = () => (dispach: Dispatch) => {
    api.authMe()
        .then(res => {
            apiPack.getPacks()
                .then((res) => {
                    dispach(getCard(res.data.cardPacks))
                })
        })
        .catch((error) => {
            console.log('bad response')
        })
}
export const searchNameTC = (findByName: string): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            packsListHelperUtils.SearchByName(findByName)
                .then(res => {
                    console.log(res)
                    dispatch(getCard(res.data.cardPacks))
                })
        })
        .catch((error) => {
            console.log('bad response')
        })
}