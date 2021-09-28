import React, {useState} from 'react';
import s from './HeaderTable.module.css'
import TableRow from '../ComponentsTable/TableRow';
import {apiPack} from "../../../Dal/Api";
import {useDispatch} from "react-redux";
import {getPacksCard} from "../../../Store/Reducers/DeckReducer";
import Table from "../Table";
import TableMenu from "./TableMenu";

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
    const dispatch = useDispatch()
    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const addedPack = () => {
        setStatus(true)
    }
    return (
        <div>
            <div>
                <div className={s.headerTable}>
                    <div>Name</div>
                    <div>CardsCount</div>
                    <div>Created</div>
                    <div>Rating</div>
                    <div>
                        {status ? ''
                            : <button className={s.button} onClick={addedPack}>Added</button>
                        }

                    </div>
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
            {status && <TableMenu clearMenu={clearMenu}/>}
        </div>

    );
};
export default HeaderTable;