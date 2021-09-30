import React from 'react'
import { useSelector} from 'react-redux';
import {AppRootStateType} from '../../Store/Store';
import s from './CardsTable.module.css'
import { CardInitStateType} from "../../Store/Reducers/CardsReducer";
import HeaderCardsTable from './ComponentsCardsTable/HeaderCardsTable';


const CardsTable = () => {
const {cards} = useSelector<AppRootStateType,CardInitStateType>(state=> state.cards)
    return (
        <div className={s.table}>
            <HeaderCardsTable data={cards}/>
        </div>
    )
}
export default CardsTable