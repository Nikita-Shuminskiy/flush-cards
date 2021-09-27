import React from 'react';
import s from './TableRow.module.css'

type DataCardsProps = {
    name: string
    countCard: number
    grade: number
    shots: number
    rating: number
}

const TableRow = (props: DataCardsProps) => {

    return (
        <div>
            <div className={s.table}>
                <div>{props.name}</div>
                <div>{props.countCard}</div>
                <div>{props.grade}</div>
                <div>{props.shots}</div>
                <div>{props.rating}</div>
            </div>
        </div>
    );
};

export default TableRow;