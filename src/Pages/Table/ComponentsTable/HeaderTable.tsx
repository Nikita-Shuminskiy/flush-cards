import React from 'react';
import s from './HeaderTable.module.css'
import TableRow from '../ComponentsTable/TableRow';

export type testDataProps = {
    data: Array<testObjType>
}


export type testObjType = {
    _id: string,
    name: string,
    cardsCount: number,
    created: string,
    rating: number,
}


const HeaderTable = (props: testDataProps) => {

    return (
        <div>
            <div>
                <div className={s.headerTable}>
                    <div>Name</div>
                    <div>CardsCount</div>
                    <div>Created</div>
                    <div>Rating</div>
                    <div>Actions</div>
                </div>
                {props.data.map((el) => <TableRow
                    id={el._id}
                    key={el._id}
                    name={el.name}
                    countCard={el.cardsCount}
                    created={el.created.slice(0, 10)}
                    rating={el.rating}
                />)}
            </div>
        </div>

    );
};
export default HeaderTable;