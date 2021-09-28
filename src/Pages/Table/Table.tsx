import React, {useEffect} from 'react'
import HeaderTable from './ComponentsTable/HeaderTable'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../Store/Store";
import {DeckInitStateType, getPacksCardTC} from '../../Store/Reducers/DeckReducer';
import s from './Table.module.css'



const Table = () => {
    const {cardPacks} = useSelector<AppRootStateType,  DeckInitStateType>(state => state.deck)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksCardTC())
    },[])
    return (
        <div className={s.table}>
            <HeaderTable data={cardPacks}/>
        </div>
    )
}
export default Table