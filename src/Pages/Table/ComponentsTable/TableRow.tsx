import React from 'react';
import s from './TableRow.module.css'
import {useDispatch} from "react-redux";
import { setCurrentPack} from "../../../Store/Reducers/DeckReducer";
import {getCardsTC} from '../../../Store/Reducers/CardsReducer';
import {changeModeModal} from "../../../Store/Reducers/AppReducer";


type DataCardsProps = {
    name: string
    countCard: number
    created: string
    rating: number
    id: string
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
                <div>{props.rating}</div>
                <div className={s.menu}>
                    <button onClick={onChangeNamePack}>change</button>
                    <button onClick={deletePack}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default TableRow;