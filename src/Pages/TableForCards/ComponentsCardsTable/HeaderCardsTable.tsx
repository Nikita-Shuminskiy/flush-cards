import React from 'react';
import s from './HeaderCardsTable.module.css'
import CardsTableRow from './CardsTableRow';
import { Raiting } from '../../../Common/Raiting/Raiting';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../Store/Store';
import { CardPackType } from '../../../Store/Reducers/DeckReducer';

export type testDataProps = {
    data: Array<testObjType>
}


export type testObjType = {
    _id: string,
    question: string,
    answer: string,
    updated: string,
    rating: number,
    grade:number
}


const HeaderCardsTable = (props: testDataProps) => {
/*    const cardPacks = useSelector<AppRootStateType, CardPackType[]>(state => state.deck.cardPacks)*/
    return (
        <div>
            <div>
                <div className={s.headerTable}>
                    <div>Question</div>
                    <div>Answer</div>
                    <div>Update</div>
                    <div>Raiting</div>
                    <div>Actions</div>
                </div>
                {props.data.map((el) => <CardsTableRow
                    id={el._id}
                    key={el._id}
                    question={el.question}
                    answer={el.answer}
                    update={el.updated.slice(0, 10)}
                    rating={el.rating}
                    grade={el.grade}
                />)}
            </div>
        </div>

    );
};
export default HeaderCardsTable;