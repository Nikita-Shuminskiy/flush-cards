
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addedCardsTC, CardInitStateType, changeCardsTC, deleteCardsTC, getCardsTC} from '../../Store/Reducers/CardsReducer';
import {DeckInitStateType, getPacksCardTC} from '../../Store/Reducers/DeckReducer';
import {AppRootStateType} from "../../Store/Store";

const Test = () => {
    const dispatch = useDispatch()
    // const a = useSelector<AppRootStateType,CardInitStateType>(state=> state.cards)
    // const b = useSelector<AppRootStateType,DeckInitStateType>(state=> state.deck)
    // console.log(b)


    //////    раскоментить что бы получать паки в стейт .. куда пока его опредетиь не знаю    ///////////////////
    // useEffect(() => {
    //     dispatch(getCardsTC('615455b088c97623f0bc1115'))
    //
    //
    // }, [])


/*    useEffect(() => {
        dispatch(getPacksCardTC())



    }, [])*/

    return (
        <div>


        </div>
    );
};

export default Test;