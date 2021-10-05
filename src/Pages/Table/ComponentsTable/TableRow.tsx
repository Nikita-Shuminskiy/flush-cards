import React, { useState } from 'react';
import s from './TableRow.module.css'
import {useDispatch, useSelector} from "react-redux";
import { CardPackType, setCurrentPack} from "../../../Store/Reducers/DeckReducer";
import {getCardsTC} from '../../../Store/Reducers/CardsReducer';
import {changeModeModal} from "../../../Store/Reducers/AppReducer";
import { Raiting } from '../../../Common/Raiting/Raiting';
import { AppRootStateType } from '../../../Store/Store';


type DataCardsProps = {
    name: string
    countCard: number
    created: string
    rating: number
    id: string
    grade:number
}

const TableRow = (props: DataCardsProps) => {
    const dispatch = useDispatch()
    const deletePack = () => {
        dispatch(changeModeModal('delete'))
        dispatch(setCurrentPack(props.id))
    }
    const onChangeNamePack = () => {
        dispatch(changeModeModal('change'))
        dispatch(setCurrentPack(props.id))
    }
    const showPacksCard = () => {
        dispatch(getCardsTC(props.id))
    }
    return (
        <div>
            <div className={s.table}>
                <div>
                    <a href="#/cards" onClick={showPacksCard}>
                    {props.name} </a>
                </div>
                <div>{props.countCard}</div>
                <div>{props.created}</div>
                <div><Raiting grade={props.grade} id={props.id}/></div>
                <div className={s.menu}>
                    <button onClick={onChangeNamePack}>change</button>
                    <button onClick={deletePack}>delete</button>
                    <button onClick={deletePack}>lern</button>
                </div>
            </div>
        </div>
    );
};

export default TableRow;