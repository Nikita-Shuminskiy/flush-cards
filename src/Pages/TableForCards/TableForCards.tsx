import React from 'react'
import { useSelector} from 'react-redux';
import {AppRootStateType} from '../../Store/Store';
import s from './TableForCards.module.css'
import { CardInitStateType} from "../../Store/Reducers/CardsReducer";
import HeaderTableFC from './ComponentsTableFC/HeaderTableFC';


const TableForCards = () => {
const {cards} = useSelector<AppRootStateType,CardInitStateType>(state=> state.cards)
    console.log(cards)
    return (
        <div className={s.table}>
            <HeaderTableFC data={cards}/>
        </div>
    )
}
export default TableForCards