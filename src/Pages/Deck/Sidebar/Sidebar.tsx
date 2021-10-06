import {Switcher} from './Swicher/Switcher';
import React, {useState} from 'react';
import s from './Sidebar.module.css'
import RangeInput from '../../../Common/RangeInput/RangeInput';
import {apiPacksCards} from '../../../Dal/Api';
import {useDispatch, useSelector} from 'react-redux';
import {
    changeMinCardCount,
    DeckInitStateType,
    filterPacksByCardsTC,
    getOnlyPacks,
    getPacksCardData
} from '../../../Store/Reducers/DeckReducer';
import {AppRootStateType} from '../../../Store/Store';

export const Sidebar = () => {
    const {minCardsCount} = useSelector<AppRootStateType, DeckInitStateType>(state => state.deck)
    const dispatch = useDispatch()
    const [value, setValue] = useState(minCardsCount)
    const chagnedValue = (value: number) => {
        setValue(value)

    }
    const filter = (value: number) => {
        dispatch(filterPacksByCardsTC(value))
    }
    const test = () => {
        filter(value)
    }
    return (
        <div className={s.main}>
            <Switcher/>
            <div>
                Minim card {value}
            </div>
            <RangeInput chagnedValue={chagnedValue}/>
            <button onClick={test}>filter</button>
        </div>
    );
}