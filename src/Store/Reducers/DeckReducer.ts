import {api, apiCards, apiPacksCards, packsListHelperUtils} from '../../Dal/Api';
import {AppThunk} from '../Store';
import {setAlertList} from './AppReducer';


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
    __v: number,
}
const initialState = {
    cardPacks: [] as Array<CardPackType>,
    isCheckedMyPacks: false,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 7,
    currentPack: '',
    searchName: ''
}
export type DeckInitStateType = typeof initialState

export const deckReducer = (state: DeckInitStateType = initialState, action: DeckActionType): DeckInitStateType => {
    switch (action.type) {
        case 'DECK/GET-CARD-DATA': {
            return {
                ...state,
                cardPacks: action.packs.cardPacks,
                cardPacksTotalCount: action.packs.cardPacksTotalCount,
                maxCardsCount: action.packs.maxCardsCount,
                page: action.packs.page,
            }
        }
        case "DECK/SEARCH-NAME":
            debugger
            return {
                ...state,
                searchName: action.name
            }
        case "DECK/CHANGE-MIN-CARD-COUNT":
            return {
                ...state,
                minCardsCount: action.count
            }
        case "DECK/GET-ONLY-PACKS": {
            return {
                ...state, cardPacks: action.packs
            }
        }
        case 'DECK/DELETE-PACKS-CARD': {
            return {
                ...state,
                cardPacks: state.cardPacks.filter(el => el._id !== action.id)
            }
        }
        case 'DECK/CHANGE-NAME-PACK': {
            return {
                ...state,
                cardPacks: state.cardPacks.map(el => el._id === action.id ? {...el, name: action.name} : el)
            }
        }
        case "DECK/CURRENT-PACK":
            return {...state, currentPack: action.id}
        case 'SET-IS-CHECKED-MY-PACKS':
            return {...state, isCheckedMyPacks: action.isChecked}
        case 'SET/TOTAL-DECK-COUNT':
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case 'SET/CURRENT-PAGES':
            return {...state, page: action.currentPage}
        default:
            return state
    }
}
//actions
export const getPacksCardData = (packs: DeckInitStateType) => {
    return {type: 'DECK/GET-CARD-DATA', packs} as const
}
export const getOnlyPacks = (packs: Array<CardPackType>) => {
    return {type: 'DECK/GET-ONLY-PACKS', packs} as const
}
export const deletePacksCard = (id: string) => {
    return {type: 'DECK/DELETE-PACKS-CARD', id} as const
}
export const changeNamePack = (id: string, name: string) => {
    return {type: 'DECK/CHANGE-NAME-PACK', id, name} as const
}
export const setTotalPackCount = (cardPacksTotalCount: number) => {
    return {type: 'SET/TOTAL-DECK-COUNT', cardPacksTotalCount} as const
}
export const setIsCheckedMyPacks = (isChecked: boolean) => {
    return {type: 'SET-IS-CHECKED-MY-PACKS', isChecked} as const
}
export const setCurrentPages = (currentPage: number) => {
    return {type: 'SET/CURRENT-PAGES', currentPage} as const
}
export const setCurrentPack = (id: string) => {
    return {type: 'DECK/CURRENT-PACK', id} as const
}
export const changeMinCardCount = (count: number) => {
    return {type: 'DECK/CHANGE-MIN-CARD-COUNT', count} as const
}
export const searchName = (name: string) => {
    return {type: 'DECK/SEARCH-NAME', name} as const
}
//type
export type DeckActionType =
    | ReturnType<typeof getPacksCardData>
    | ReturnType<typeof deletePacksCard>
    | ReturnType<typeof changeNamePack>
    | ReturnType<typeof getOnlyPacks>
    | ReturnType<typeof setIsCheckedMyPacks>
    | ReturnType<typeof setTotalPackCount>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setCurrentPack>
    | ReturnType<typeof changeMinCardCount>
    | ReturnType<typeof searchName>
//thunk


export const getPacksCardTC = (): AppThunk => (dispatch, getState) => {
    const {minCardsCount, page, pageCount} = getState().deck
    apiPacksCards.getPacksTest(undefined, page, pageCount, minCardsCount)
        .then((res) => {
            dispatch(getPacksCardData(res.data))
        })
}
export const filterPacksByCardsTC = (value: number): AppThunk => (dispatch, getState) => {
    dispatch(changeMinCardCount(value))
    dispatch(getPacksCardTC())
}

export const deletePacksCardTC = (id: string): AppThunk => (dispatch, getState) => {
    const {isCheckedMyPacks, minCardsCount, page, pageCount} = getState().deck
    apiPacksCards.deletePack(id)
        .then((res) => {
            dispatch(deletePacksCard(id))
            dispatch(setAlertList({id: 1, type: 'success', title: 'Your deck has been successfully removed'}))
            if (!isCheckedMyPacks) {
                apiPacksCards.getPacksTest(undefined, page, pageCount, minCardsCount)
                    .then((res) => {
                        dispatch(getPacksCardData(res.data))
                    })
                    .catch((error) => {
                    })
            } else {
                dispatch(setPrivatPacks())
            }
        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'You can only delete your own decks'}))
        })
}
export const changedNamePackTC = (newName: string, id: string): AppThunk => (dispatch) => {
    apiPacksCards.changedPack(newName, id)
        .then((res) => {
            dispatch(changeNamePack(id, newName))
        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'Can not change someone else deck'}))
        })
}
export const creatingNewPackTC = (name: string): AppThunk => (dispatch, getState) => {
    const {isCheckedMyPacks, minCardsCount, page, pageCount} = getState().deck
    apiPacksCards.addedPack(name)
        .then((res) => {
            if (!isCheckedMyPacks) {
                apiPacksCards.getPacksTest(undefined, page, pageCount, minCardsCount)
                    .then((res) => {
                        dispatch(getPacksCardData(res.data))
                    })
            } else {
                dispatch(setPrivatPacks())
            }
        })
}

export const searchNameTC = (findByName: string): AppThunk => (dispatch, getState) => {
    const {isCheckedMyPacks, minCardsCount, page, pageCount} = getState().deck
    api.authMe()
        .then(res => {
            apiPacksCards.getPacksTest(findByName, page, pageCount, minCardsCount)
                .then(res => {
                    debugger
                   dispatch(searchName(findByName))
                    dispatch(getPacksCardData(res.data))
                    dispatch(setAlertList({
                        id: 1,
                        type: 'success',
                        title: `Found ${res.data.cardPacksTotalCount} decks with this name`
                    }))
                })
        })
}
export const setPrivatPacks = (): AppThunk => (dispatch, getState) => {
    const {isCheckedMyPacks, minCardsCount, page, pageCount} = getState().deck
    api.authMe()
        .then(res => {
            apiPacksCards.getPackPrivatePaginatod(res.data._id, page, pageCount, minCardsCount)
                .then((res) => {
                    dispatch(getPacksCardData(res.data))
                })
        })
        .catch((error) => {
        })
}
export const getUserThunk = (currentPage: number, pageCount: number): AppThunk => (dispatch, getState) => {
    const {isCheckedMyPacks, minCardsCount,searchName} = getState().deck
    console.log(searchName)
    if (!isCheckedMyPacks) {
        apiPacksCards.getPacksTest(searchName, currentPage, pageCount, minCardsCount)
            .then(data => {

                dispatch(setTotalPackCount(data.data.cardPacksTotalCount))
                dispatch(setCurrentPages(currentPage))
                dispatch(getPacksCardData(data.data))
            })
    } else {
        api.authMe()
            .then(res => {
                apiPacksCards.getPackPrivatePaginatod(res.data._id, currentPage, pageCount, minCardsCount)
                    .then((data) => {
                        dispatch(setTotalPackCount(data.data.cardPacksTotalCount))
                        dispatch(setCurrentPages(currentPage))
                        dispatch(getPacksCardData(data.data))
                    })
            })
            .catch((error) => {
            })
    }
}

