import React, {ChangeEvent, useState} from 'react';
import s from '../../Pages/Table/ComponentsTable/TableMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
    changedNamePackTC,
    creatingNewPackTC,
    DeckInitStateType,
    deletePacksCardTC, getUserThunk
} from '../../Store/Reducers/DeckReducer';
import { Paginator } from './Paginator/Paginator';
import { AppRootStateType } from '../../Store/Store';


type TableMenuPropsType = {
    clearMenu: () => void
    title: string
    mode: 'delete' | 'changed'
    id: string
}


const TableMenuTest = (props: TableMenuPropsType) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')

    const cancelCreatingNewPack = () => {
        props.clearMenu()
    }
    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const creatingNewPack = () => {
        if (props.mode === 'changed') {
            dispatch(changedNamePackTC(value, props.id))
            props.clearMenu()
        } else if (props.mode === 'delete') {
            dispatch(deletePacksCardTC(props.id))
            props.clearMenu()
        }

    }
    return (

        <div className={s.menu}>
            <h3>{props.title}</h3>
            {props.mode === 'changed'
                ? <div><input type="text" value={value} onChange={changedValue}/>
                    <div>
                        <button onClick={creatingNewPack}>ok</button>
                        <button onClick={cancelCreatingNewPack}>cancel</button>
                    </div>
                </div>
                : <div>
                    <p>Вы уверены что хотите удалить свою колоду?</p>
                    <div>
                        <button onClick={creatingNewPack}>delete</button>
                        <button onClick={cancelCreatingNewPack}>cancel</button>
                    </div>
                </div>}
        <div>
        </div>

        </div>

    );
};
export default TableMenuTest;