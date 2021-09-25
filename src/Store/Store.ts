import { applyMiddleware, combineReducers, createStore } from 'redux';
import { LoginActionsType, loginReducer } from './Reducers/LoginReducer'
import { RegistrationActionType, registrationReducer } from './Reducers/RegistrationReducer'
import { profileReducer } from './Reducers/ProfileReducer'
import thunk, { ThunkAction } from 'redux-thunk';
import { AppActionType, AppReducer } from './Reducers/AppReducer';
import { deckReducer } from './Reducers/deckReducer';
import { cardsReducer } from './Reducers/CardsReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    app: AppReducer,
    deck: deckReducer,
    cards:cardsReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

//type
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionsType =
    | AppActionType
    | LoginActionsType
    | RegistrationActionType
/*  | CardsActionType
    | DeckActionType
    | ProfileActionType*/ // они пустые. когда будет логика, подключайте)
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>


// @ts-ignore
window.store = store;