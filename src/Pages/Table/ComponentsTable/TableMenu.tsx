import React, {ChangeEvent, useState} from 'react';
import s from './TableMenu.module.css'
import {creatingNewPackTC} from "../../../Store/Reducers/DeckReducer";
import {useDispatch} from "react-redux";


type TableMenuPropsType = {
    clearMenu: () => void
}


const TableMenu = (props: TableMenuPropsType) => {
    const dispatch = useDispatch()
   const [value, setValue] = useState<string>('')
    const cancelCreatingNewPack = () => {
        props.clearMenu()
    }
    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const creatingNewPack = () =>{
        dispatch(creatingNewPackTC(value))
        props.clearMenu()
    }
    return (
        <div className={s.menu}>
            <h3>Введите имя колоды</h3>
            <input type="text" value={value} onChange={changedValue}/>
            <div>
                <button onClick={creatingNewPack} >ok</button>
                <button onClick={cancelCreatingNewPack} >cancel</button>
            </div>
        </div>

    );
};
export default TableMenu;