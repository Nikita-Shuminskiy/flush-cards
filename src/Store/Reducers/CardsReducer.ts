import {apiCards} from "../../Dal/Api";
import {AppThunk} from "../Store";
import {initialApp, setAlertList} from "./AppReducer";
import { setCurrentPack } from "./DeckReducer";


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
    currentCardID: ''
}

export type CardInitStateType = typeof initialState

export const cardsReducer = (state: CardInitStateType = initialState, action: CardsActionType): CardInitStateType => {
    switch (action.type) {
        case "CARDS/GET-CARDS": {
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
        case 'DECK/UPDATE-RAITING':{
            return {
                ...state,
                cards: state.cards.map(el => el._id === action.id ? {
                    ...el,
                    grade: action.grade
                } : el)
            }
        }
        case "CARDS/CHANGE-VALUE-CARD": {
            return {
                ...state,
                cards: state.cards.map(el => el._id === action.id ? {
                    ...el,
                    question: action.question,
                    answer: action.answer
                } : el)
            }
        }
        case "CARDS/SET-CURRENT-CARD-ID": {
            return {
                ...state, currentCardID: action.id
            }
        }
        case "CARDS/DELETE-CARD": {
            return {
                ...state,
                cards: state.cards.filter(el => el._id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}
//types
export type CardsActionType =
    | ReturnType<typeof changeValueCard>
    | ReturnType<typeof deleteCard>
    | ReturnType<typeof setCurrentCard>
    | ReturnType<typeof getCards>
    | ReturnType<typeof updateRaiting>

//actions
export const updateRaiting = (grade: number, id:string) => {
    return {type: 'DECK/UPDATE-RAITING', grade, id} as const
}
const getCards = (data: CardInitStateType) => {
    return {type: 'CARDS/GET-CARDS', data} as const
}
const changeValueCard = (id: string, question: string, answer: string) => {
    return {type: 'CARDS/CHANGE-VALUE-CARD', id, question, answer} as const
}
export const deleteCard = (id: string) => {
    return {type: 'CARDS/DELETE-CARD', id} as const
}
export const setCurrentCard = (id: string) => {
    return {type: 'CARDS/SET-CURRENT-CARD-ID', id} as const
}

//thunks
export const updateRaitingTC = (grade: number,id:string): AppThunk => (dispatch) => {
    apiCards.updRaiting(grade, id)
        .then(res => {
            dispatch(setCurrentCard(res.data.card_id))
            dispatch(updateRaiting(res.data.updatedGrade.grade,res.data.updatedGrade.card_id))
        })
        .catch((error) => {
            alert(error)
        })
}
export const getCardsTC = (id: string): AppThunk => (dispatch) => {
    dispatch(initialApp())
    apiCards.getCards(id)
        .then((res) => {
            dispatch(initialApp())
            dispatch(getCards(res.data))
            dispatch(setCurrentPack(id))
        })
}
export const addedCardsTC = (id: string, question: string, answer: string): AppThunk => (dispatch) => {
    apiCards.addCard(id, question, answer)
        .then((res) => {
            dispatch(getCardsTC(id))
        })
}
export const deleteCardsTC = (id: string): AppThunk => (dispatch) => {
    debugger
    apiCards.deleteCard(id)
        .then((res) => {
            dispatch(deleteCard(id))
            dispatch(setAlertList({id: 1, type: 'success', title: '  Your card has been successfully deleted'}))
        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'It is impossible to delete someone else value'}))
        })
}
export const changeCardsTC = (id: string, question: string, answer: string): AppThunk => (dispatch) => {
    apiCards.changeCard(id, question, answer)
        .then((res) => {
            dispatch(changeValueCard(id, question, answer))
        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'It is impossible to change someone else value'}))
        })
}