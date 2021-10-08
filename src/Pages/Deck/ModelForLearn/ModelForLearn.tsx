import React, { useEffect, useState } from 'react';
import s from './ModelForLearn.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setStatusTraining } from '../../../Store/Reducers/AppReducer';
import { AppRootStateType } from '../../../Store/Store';
import { CardType } from '../../../Store/Reducers/CardsReducer';
import { Raiting } from '../../../Common/Raiting/Raiting';

export type ModelForLearnType = {}

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('testIgnat: ', sum, rand, res)

    return cards[res.id + 1];
}
const ModelForLearn = (props: ModelForLearnType) => {
    const [isAnswer, setIsAnswer] = useState<boolean>(false);
    const learnCards = useSelector((store: AppRootStateType) => store.cards.learnCards);
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
    useEffect(() => {
        learnCards.length > 0 && setCard(getCard(learnCards));
    }, [dispatch, learnCards]);
    const onNext = () => {
        setIsAnswer(false)
        learnCards.length > 0 && setCard(getCard(learnCards))
    }
    const changeStatusTraining = () => dispatch(setStatusTraining(false))
    const changeAnswer = () => setIsAnswer(true)
    return (
        <div>
            <div>
                <div style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,
                }} onClick={changeStatusTraining}/>
            </div>
            <div className={s.menu}>
                <h3>Learn Card</h3>
                <div className={s.text}><span>{isAnswer ? card.answer : card.question}</span></div>
                {isAnswer && <Raiting grade={card.grade} id={card._id}/>}
                <div>
                    <button onClick={changeStatusTraining}>cancel</button>
                    <button onClick={changeAnswer}>show answer</button>
                    <button onClick={onNext}>next question</button>
                </div>
            </div>
        </div>
    );
};
export default ModelForLearn;