import {api, apiPacksCards, packsListHelperUtils} from '../../Dal/Api';
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
    __v: number
}
const initialState = {
    cardPacks: [] as Array<CardPackType>,
    isCheckedMyPacks: false,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 10,

}
export type DeckInitStateType = typeof initialState

export const deckReducer = (state:DeckInitStateType = initialState, action: DeckActionType): DeckInitStateType => {

    switch (action.type) {
        case 'GET-CARD': {
            return {...state,
                cardPacks: action.packs.cardPacks,
                cardPacksTotalCount: action.packs.cardPacksTotalCount,
                maxCardsCount: action.packs.maxCardsCount,
                minCardsCount: action.packs.minCardsCount,
                page: action.packs.page,
                pageCount: action.packs.pageCount,
            }
        }
        case 'DELETE-PACKS-CARD': {
            return {
                ...state,
                cardPacks: state.cardPacks.filter(el => el._id !== action.id)
            }
        }
        case 'CHANGE-NAME-PACK': {
            return {
                ...state,
                cardPacks: state.cardPacks.map(el => el._id === action.id ? {...el, name: action.name} : el)
            }
        }
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
export const getPacksCard = (packs: DeckInitStateType) => {
    return {type: 'GET-CARD', packs} as const
}
export const deletePacksCard = (id: string) => {
    return {type: 'DELETE-PACKS-CARD', id} as const
}
export const changeNamePack = (id: string, name: string) => {
    return {type: 'CHANGE-NAME-PACK', id, name} as const
}
export const setIsCheckedMyPacks = (isChecked: boolean) => ({type: 'SET-IS-CHECKED-MY-PACKS', isChecked} as const)

//nick
export const setCurrentPages = (currentPage: number) => ({type: 'SET/CURRENT-PAGES', currentPage} as const)
export const setTotalPackCount = (cardPacksTotalCount:number) => ({type: 'SET/TOTAL-DECK-COUNT', cardPacksTotalCount} as const)
export const getUserThunk = (currentPage: number, pageCount: number): AppThunk => {
    return (dispatch) => {
        apiPacksCards.getPackPaginator(currentPage, pageCount).then(data => {
            dispatch(setTotalPackCount(data.cardPacksTotalCount))
            dispatch(setCurrentPages(currentPage))
            dispatch(getPacksCard(data))
        })
    }
}
//
//type
type GetCardTypeAC = ReturnType<typeof getPacksCard>
type DeletePacksCard = ReturnType<typeof deletePacksCard>
type ChangeNamePackType = ReturnType<typeof changeNamePack>
export type DeckActionType =
    | GetCardTypeAC
    | DeletePacksCard
    | ChangeNamePackType
    | ReturnType<typeof setIsCheckedMyPacks>
    | ReturnType<typeof setTotalPackCount>
    | ReturnType<typeof setCurrentPages>

//thunk
export const getPacksCardTC = (): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            apiPacksCards.getPacks()
                .then((res) => {
                    dispatch(getPacksCard(res.data))
                    console.log(res.data)
                })
        })
        .catch((error) => {
            console.log('bad response')
        })
}
export const deletePacksCardTC = (id: string): AppThunk => (dispatch) => {
    apiPacksCards.deletePack(id)
        .then((res) => {
            dispatch(deletePacksCard(id))
            dispatch(setAlertList({id: 1, type: 'success', title: 'Ваша колода удалена'}))
            apiPacksCards.getPacks()
                .then((res) => {
                    dispatch(getPacksCard(res.data))
                })
                .catch((error) => {
                })
        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'Удалять можно только свои колоды'}))
        })


}
export const changedNamePackTC = (newName: string, id: string): AppThunk => (dispatch) => {
    apiPacksCards.changedPack(newName, id)
        .then((res) => {
            dispatch(changeNamePack(id, newName))

        })
        .catch((error) => {
            dispatch(setAlertList({id: 1, type: 'error', title: 'Нельзя изменить чужую колоду'}))
        })
}
export const creatingNewPackTC = (name: string): AppThunk => (dispatch) => {
    apiPacksCards.addedPack(name)
        .then((res) => {
            //
            apiPacksCards.getPacks()
                .then((res) => {
                    dispatch(getPacksCard(res.data))
                })
            console.log(res)
        })

}

export const searchNameTC = (findByName: string): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            packsListHelperUtils.searchByName(findByName)
                .then(res => {
                    console.log(res)
                    dispatch(getPacksCard(res.data))
                })

})}
export const setPrivatPacks = (): AppThunk => (dispatch) => {
    api.authMe()
        .then(res => {
            packsListHelperUtils.getPrivatPacks(res.data._id)
                .then((res) => {
                    dispatch(getPacksCard(res.data))
                })
        })
        .catch((error) => {
            console.log('bad response')
        })
}

