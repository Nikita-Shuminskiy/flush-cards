import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import starEmpty from '../../Images/StarEmpty.png';
import starFull from '../../Images/StarFull.png';
import { updateRaitingTC } from '../../Store/Reducers/CardsReducer';

export type RaitingType = {
    id: string
    grade: number
}
export const Raiting: React.FC<RaitingType> = (props) => {
    return (
        <div>
            <Star id={props.id} value={1} on={props.grade >= 1}/>
            <Star id={props.id} value={2} on={props.grade >= 2}/>
            <Star id={props.id} value={3} on={props.grade >= 3}/>
            <Star id={props.id} value={4} on={props.grade >= 4}/>
            <Star id={props.id} value={5} on={props.grade >= 5}/>
        </div>
    );
};
export type StarType = {
    on: boolean
    id:string
    value:number
}
const Star = (props: StarType) => {
    const dispatch = useDispatch()

    const changeRaiting = () => {
        dispatch(updateRaitingTC(props.value, props.id))
        console.log(props.value)
    }

    return <>
        <span onClick={changeRaiting}>{props.on ?
            <img src={starFull} alt="star"/>
            : <img src={starEmpty} alt="star"/>}
        </span>
    </>
}



