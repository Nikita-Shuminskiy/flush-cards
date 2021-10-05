import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CardInitStateType} from '../../Store/Reducers/CardsReducer';
import {DeckInitStateType} from '../../Store/Reducers/DeckReducer';
import {AppRootStateType} from '../../Store/Store';


const Test = () => {
    const dispatch = useDispatch()
    const test = useSelector<AppRootStateType, DeckInitStateType>(state => state.deck)
    const card = useSelector<AppRootStateType, CardInitStateType>(state => state.cards)
    console.log(test)
    console.log(card)
    return (
        <div>

        </div>
    );
};

export default Test;