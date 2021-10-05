import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { CardInitStateType } from '../../Store/Reducers/CardsReducer';
import { AppRootStateType } from '../../Store/Store';



const Test = () => {
   const test = useSelector<AppRootStateType,CardInitStateType>(state=> state.cards)
    const cardID = useSelector<AppRootStateType, string>(state => state.cards.currentCardID)
 const a = test.cards.find(el=>el._id === cardID)
    if(a){
        const b = a.answer
        console.log(b)
    }


    const dispatch = useDispatch()
    console.log(cardID)
    console.log(test)

    return (
        <div>

        </div>
    );
};

export default Test;