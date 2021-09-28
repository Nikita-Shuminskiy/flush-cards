import React  from 'react';
import s from './HeaderTable.module.css'
import TableRow from '../ComponentsTable/TableRow';
import { apiPack} from "../../../Dal/Api";
import {useDispatch} from "react-redux";
import {getPacksCard} from "../../../Store/Reducers/DeckReducer";
export type testDataProps ={
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

const addedPack = () => {
    apiPack.addedPack()
        .then((res)=>{
            apiPack.getPacks()
                .then((res) => {
                    dispatch(getPacksCard(res.data.cardPacks))
                })
            console.log(res)
        })
}




    return (
        <div>
            <div className={s.headerTable}>
                <div  >Name</div>
                <div >CardsCount</div>
                <div >Created</div>
                <div >Rating</div>
                <div >
                    <button className={s.button} onClick={addedPack}>Added</button>
                </div>
            </div>
            {props.data.map((el)=> <TableRow
                id={el._id}
                key={el._id}
                name={el.name}
                countCard={el.cardsCount}
                created={el.created.slice(0,10)}
                rating={el.rating}
            />)}

        </div>
    );
};
export default HeaderTable;