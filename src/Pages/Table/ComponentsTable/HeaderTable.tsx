import React  from 'react';
import s from './HeaderTable.module.css'
import TableRow from '../ComponentsTable/TableRow';
export type testDataProps ={
    data: Array<testObjType>
}



export type testObjType = {
    "name": string,
    "grade": number,
    "shots": number,
    "cardsCount": number,
    "rating": number,
}

const HeaderTable = (props: testDataProps) => {

    return (
        <div>
            <div className={s.headerTable}>
                <div >Name</div>
                <div >CardsCount</div>
                <div >Update</div>
                <div >URL</div>
                <div >Added</div>
            </div>
            {props.data.map((el)=>    <TableRow name={el.name} countCard={el.cardsCount}
                                                shots={el.shots} grade={el.grade} rating={el.rating} />)}

        </div>
    );
};
export default HeaderTable;