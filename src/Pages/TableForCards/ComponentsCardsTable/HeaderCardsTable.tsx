import React from 'react';
import s from './HeaderCardsTable.module.css'
import CardsTableRow from './CardsTableRow';

export type testDataProps = {
    data: Array<testObjType>
}


export type testObjType = {
    _id: string,
    question: string,
    answer: string,
    updated: string,
    rating: number,
}


const HeaderCardsTable = (props: testDataProps) => {
    return (
        <div>
            <div>
                <div className={s.headerTable}>
                    <div>Question</div>
                    <div>Answer</div>
                    <div>Update</div>
                    <div>Rating</div>
                    <div>Actions</div>
                </div>
                {props.data.map((el) => <CardsTableRow
                    id={el._id}
                    key={el._id}
                    question={el.question}
                    answer={el.answer}
                    update={el.updated.slice(0, 10)}
                    rating={el.rating}
                />)}
            </div>
        </div>

    );
};
export default HeaderCardsTable;