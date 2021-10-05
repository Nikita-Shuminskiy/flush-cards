import React from 'react';
import starEmpty from '../../Images/StarEmpty.png';
import starFull from '../../Images/StarFull.png';

export type RaitingType = {
    setValue: (value: number) => void
    value: number
}


export const Raiting: React.FC<RaitingType> = (props) => {
    return (
        <div>
            <Star selected={props.value >= 1} setValue={() => props.setValue(1)}/>
            <Star selected={props.value >= 2} setValue={() => props.setValue(2)}/>
            <Star selected={props.value >= 3} setValue={() => props.setValue(3)}/>
            <Star selected={props.value >= 4} setValue={() => props.setValue(4)}/>
            <Star selected={props.value >= 5} setValue={() => props.setValue(5)}/>
        </div>
    );
};
export type StarType = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StarType) => {
    return <span onClick={() => {
        props.setValue()
    }}>{props.selected ? <img src={starFull} alt="star"/> : <img src={starEmpty} alt="star"/>}</span>
}

