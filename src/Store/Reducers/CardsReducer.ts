import {apiCards} from "../../Dal/Api";
import {Dispatch} from "redux";
import {AppThunk} from "../Store";


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
const initialState = {
    cards: [] as Array<CardType>,
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
}

export type CardInitStateType = typeof initialState

export const cardsReducer = (state: CardInitStateType = initialState, action: CardsActionType): CardInitStateType => {
    switch (action.type) {
        case "GET-CARDS": {
            debugger
            return {
                ...state,
                cards: action.data.cards,
                cardsTotalCount: action.data.cardsTotalCount,
                maxGrade: action.data.maxGrade,
                minGrade: action.data.minGrade,
                page: action.data.page,
                pageCount: action.data.pageCount,
                packUserId: action.data.packUserId,
            }
        }
        case "CHANGE-VALUE-CARD": {
            return {
                ...state,
                cards: state.cards.map(el => el._id === action.id ? {...el, question: action.question, answer:action.answer} : el)

            }
        }
        default: {
            return state
        }

    }
}
//types
export type CardsActionType =
    | GetCardsType
    | ReturnType<typeof changeValueCard>
type GetCardsType = ReturnType<typeof getCards>
//actions
const getCards = (data: CardInitStateType) => {
    debugger
    return {
        type: 'GET-CARDS',
        data
    } as const
}
const changeValueCard = (id: string, question: string,answer: string) => {
    return {
        type: 'CHANGE-VALUE-CARD',
        id,
        question,
        answer
    } as const
}

//thunks
export const getCardsTC = (id: string): AppThunk => (dispatch) => {
    apiCards.getCards(id)
        .then((res) => {
            dispatch(getCards(res.data))
            console.log(res)
        })


}
export const addedCardsTC = (id: string): AppThunk => (dispatch) => {
    apiCards.addCard(id)
        .then((res) => {
            dispatch(getCardsTC(id))
        })

}
export const deleteCardsTC = (id: string): AppThunk => (dispatch) => {
    apiCards.deleteCard(id)
        .then((res) => {
            //нужно добавить диспатчи редьюсор
        })

}
export const changeCardsTC = (id: string, question: string, answer: string): AppThunk => (dispatch) => {
    apiCards.changeCard(id, question,answer)
        .then((res) => {
            dispatch(changeValueCard(id,question,answer))
            //нужно добавить диспатчи
        })

}