import React from 'react';
import s from './HeaderTableFC.module.css'
import TableRowFC from './TableRowFC';

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


const HeaderTableFC = (props: testDataProps) => {
debugger
    return (
        <div>
            <div>
                <div className={s.headerTable}>
                    <div>Answer</div>
                    <div>Question</div>
                    <div>Update</div>
                    <div>Rating</div>
                    <div>Actions</div>
                </div>
                {props.data.map((el) => <TableRowFC
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
export default HeaderTableFC;