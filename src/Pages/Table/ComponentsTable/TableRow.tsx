import React, {useState} from 'react';
import { apiPack } from '../../../Dal/Api';
import s from './TableRow.module.css'
import {useDispatch} from "react-redux";
import {getCard} from "../../../Store/Reducers/DeckReducer";

type DataCardsProps = {
    name: string
    countCard: number
    created: string
    rating: number
    id: string
}

const TableRow = (props: DataCardsProps) => {
    debugger
    const dispatch = useDispatch()
    const test = () => {deletePack(props.id)}
const deletePack = (id: string) => {

    apiPack.deletePack(id)
        .then((res)=>{
            console.log(res)
            apiPack.getPacks()
                .then((res) => {
                    dispatch(getCard(res.data.cardPacks))
                })
        })
}

    return (
        <div>
            <div className={s.table}>
                <div >{props.name}</div>
                <div>{props.countCard}</div>
                <div>{props.created}</div>
                <div>{props.rating}</div>
                <div className={s.menu}>
                    <button>change</button>
                    <button onClick={test} >delete</button>
                </div>
            </div>
        </div>
    );
};

export default TableRow;