
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../Store/Store';


const Test = () => {
    const dispatch = useDispatch()
const ttest = useSelector<AppRootStateType, any >(state=>state.deck.cardPacks)
    console.log(ttest)
    return (
        <div>

        </div>
    );
};

export default Test;