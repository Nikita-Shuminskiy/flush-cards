import React, { useState } from 'react';
import s from './ModelForLearn.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setStatusTraining } from '../../../Store/Reducers/AppReducer';
import { AppRootStateType } from '../../../Store/Store';
import { CardPackType } from '../../../Store/Reducers/DeckReducer';
import { CardType } from '../../../Store/Reducers/CardsReducer';

export type ModelForLearnType = {
    id: string
    answer: string
    question: string
    cardPaskId: string
}
const grades = ['не знал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}
const ModelForLearn = (props: ModelForLearnType) => {
    const dispatch = useDispatch()
    const [card, setCard] = useState<CardType>({
        answer: 'string',
        cardsPack_id: 'string',
        comments: 'string',
        created: 'string',
        grade: 0,
        more_id: 'string',
        question: 'string',
        rating: 0,
        shots: 0,
        type: 'string',
        updated: 'string',
        user_id: 'string',
        __v: 0,
        _id: 'string',
    });

    const changedStatusTraining = () => {
        dispatch(setStatusTraining(false))
    }

    const changeAnswer = () => {

    }
    return (
        <div>
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100vw',
                        height: '100vh',
                        background: 'black',
                        opacity: 0.35,
                        zIndex: 20,
                    }}
                    onClick={changedStatusTraining}
                />
            </div>
            <div className={s.menu}>
                <h3>Learn </h3>
                <p>{props.question}</p>
                <div>
                    <button onClick={changedStatusTraining}>cancel</button>
                    <button onClick={changeAnswer}>show answer</button>
                </div>
            </div>
        </div>
    );
};
export default ModelForLearn;