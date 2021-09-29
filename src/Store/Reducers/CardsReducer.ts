import { apiCards} from "../../Dal/Api";
import {Dispatch} from "redux";
import { AppThunk } from "../Store";

const initialState = {
    card: [] as Array<CardType>,
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
} as any ///зафиксить ани
type CardType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}

export type CardInitStateType = typeof initialState

export const cardsReducer = (state = initialState, action: CardsActionType): CardInitStateType => {
    switch (action.type) {
        case "GET-CARDS": {
            return {...state, card: action.data.cards , state: action.data }
        }
        default: {
            return state
        }

    }
}
//types
export type CardsActionType =
    |GetCardsType
type GetCardsType = ReturnType<typeof getCards>
//actions
const getCards = (data: CardInitStateType) => {
    return {
        type: 'GET-CARDS',
        data
    } as const
}

//thunks
export const getCardsTC = (id: string):AppThunk => (dispatch) => {
            apiCards.getCards(id)
                .then((res) => {
                    dispatch(getCards(res.data))
                    console.log(res)
                })


}
export const addedCardsTC = (id: string):AppThunk => (dispatch) => {
            apiCards.addCard(id)
                .then((res) => {
                  //нужно добавить диспатчи
                })

}
export const deleteCardsTC = (id: string):AppThunk => (dispatch) => {
    apiCards.deleteCard(id)
        .then((res) => {
            //нужно добавить диспатчи
        })

}
export const changeCardsTC = (id: string, name:string):AppThunk => (dispatch) => {
    apiCards.changeCard(id,name)
        .then((res) => {
            //нужно добавить диспатчи
        })

}