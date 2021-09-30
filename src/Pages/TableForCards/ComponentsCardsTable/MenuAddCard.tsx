import React, {ChangeEvent, useState} from 'react';
import s from './MenuAddCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import { addedCardsTC } from '../../../Store/Reducers/CardsReducer';
import {AppRootStateType} from "../../../Store/Store";


type TableMenuPropsType = {
    clearMenu: () => void
}


const MenuAddCard = (props: TableMenuPropsType) => {
    const packId = useSelector<AppRootStateType, string>(state=> state.cards.currentPack)
    const dispatch = useDispatch()
   const [valueQu, setValueQu] = useState<string>('')
    const [valueAn, setValueAn] = useState<string>('')
    const cancelCreatingNewPack = () => {
        props.clearMenu()
    }
    const changedValueForQu = (e: ChangeEvent<HTMLInputElement>) => {
        setValueQu(e.currentTarget.value)
    }
    const changedValueForAn = (e: ChangeEvent<HTMLInputElement>) => {
        setValueAn(e.currentTarget.value)
    }
    const creatingNewPack = () =>{
        dispatch(addedCardsTC(packId, valueQu,valueAn))
        props.clearMenu()
    }
    return (
        <div className={s.menu}>
            <h3>Введите вопрос</h3>
            <input type="text" value={valueQu} onChange={changedValueForQu}/>
            <h3>Введите ответ</h3>
            <input type="text" value={valueAn} onChange={changedValueForAn}/>
            <div >
                <button onClick={creatingNewPack} >ok</button>
                <button onClick={cancelCreatingNewPack} >cancel</button>
            </div>
        </div>

    );
};
export default MenuAddCard;