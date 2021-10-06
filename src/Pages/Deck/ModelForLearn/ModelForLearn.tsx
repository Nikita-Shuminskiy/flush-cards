import React, {useEffect, useState} from 'react';
import s from './ModelForLearn.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setStatusTraining} from '../../../Store/Reducers/AppReducer';
import {AppRootStateType} from '../../../Store/Store';
import {CardPackType} from '../../../Store/Reducers/DeckReducer';
import {CardType} from '../../../Store/Reducers/CardsReducer';
import {useParams} from 'react-router-dom';

export type ModelForLearnType = {
    id: string
    answer: string
    question: string
    cardPaskId: string
}
const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];
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
    useEffect(() => {
        const test = getCard(cards)
        console.log(test)
    }, [])

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    // const [first, setFirst] = useState<boolean>(0);
    const {cards, learnCards} = useSelector((store: AppRootStateType) => store.cards);
    // const {id} = useParams();
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
        console.log('LearnContainer useEffect');
        //
        // if (first) {
        //     dispatch(getCards(id));
        //     setFirst(false);
        // }
        if (learnCards.length > 0) setCard(getCard(learnCards));
        debugger
        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, cards, first]);

    // const onNext = () => {
    //     setIsChecked(false);
    //
    //     if (cards.length > 0) {
    //         // dispatch
    //         setCard(getCard(cards));
    //     } else {
    //
    //     }
    // }

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
                <p>{card.question}</p>
                <div>
                    <button onClick={changedStatusTraining}>cancel</button>
                    <button onClick={changeAnswer}>show answer</button>
                </div>
            </div>
        </div>
    );
};
export default ModelForLearn;