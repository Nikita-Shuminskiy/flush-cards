import React from 'react';
import s from './HeaderTable.module.css'
import TableRow from '../ComponentsTable/TableRow';
import { useSelector } from 'react-redux';
import { CardPackType } from '../../../Store/Reducers/DeckReducer';
import { AppRootStateType } from '../../../Store/Store';

export type testDataProps = {
}



const HeaderTable = (props: testDataProps) => {
    const cardPacks = useSelector<AppRootStateType, CardPackType[]>(state => state.deck.cardPacks)
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
                {cardPacks.map((el) => <TableRow
                    id={el._id}
                    key={el._id}
                    name={el.name}
                    countCard={el.cardsCount}
                    created={el.created.slice(0, 10)}
                    rating={el.rating}
                    grade={el.grade}
                />)}
            </div>
        </div>

    );
};
export default HeaderTable;