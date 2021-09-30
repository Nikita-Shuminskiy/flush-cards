import React, {ChangeEvent, useState} from 'react';
import s from './MenuAddCard.module.css'
import {useDispatch} from "react-redux";
import { addedCardsTC } from '../../../Store/Reducers/CardsReducer';


type TableMenuPropsType = {
    clearMenu: () => void
}


const MenuAddCard = (props: TableMenuPropsType) => {
    const dispatch = useDispatch()
   const [value, setValue] = useState<string>('')
    const cancelCreatingNewPack = () => {
        props.clearMenu()
    }
    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const creatingNewPack = () =>{
        dispatch(addedCardsTC('6155e33e88b4db1e4000629d'))
        props.clearMenu()
    }
    return (
        <div className={s.menu}>
            <h3>Введите имя карточки</h3>
            <input type="text" value={value} onChange={changedValue}/>
            <div >
                <button onClick={creatingNewPack} >ok</button>
                <button onClick={cancelCreatingNewPack} >cancel</button>
            </div>
        </div>

    );
};
export default MenuAddCard;