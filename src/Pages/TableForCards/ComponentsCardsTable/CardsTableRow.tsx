import React from 'react';
import s from './CardsTableRow.module.css'
import {useDispatch} from "react-redux";
import {changeModeModal} from "../../../Store/Reducers/AppReducer";
import { setCurrentCard } from '../../../Store/Reducers/CardsReducer';


type DataCardsProps = {
    question: string
    answer: string
    update: string
    rating: number
    id: string
}

const CardsTableRow = (props: DataCardsProps) => {
    const dispatch = useDispatch()

    const deleteCard = () => {
        dispatch(setCurrentCard(props.id))
        dispatch(changeModeModal('delete'))
    }

    const onChangeNamePack = () => {
        dispatch(setCurrentCard(props.id))
        dispatch(changeModeModal('change'))
    }
    return (
        <div>
            <div className={s.table}>
                <div>{props.question}</div>
                <div>{props.answer}</div>
                <div>{props.update}</div>
                <div>{props.rating}</div>
                <div className={s.menu}>
                    <button onClick={onChangeNamePack}>change</button>
                    <button onClick={deleteCard}>delete</button>
                </div>
            </div>

        </div>
    );
};

export default CardsTableRow;