import React, {ChangeEvent, useState} from 'react';
import s from './ModelForPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changedNamePackTC, creatingNewPackTC, deletePacksCardTC} from '../../Store/Reducers/DeckReducer';
import {changeModeModal, ModelType} from "../../Store/Reducers/AppReducer";
import {AppRootStateType} from "../../Store/Store";


type TableMenuPropsType = {
    clearMenu: () => void
    model: ModelType
}


const ModelForPacks = (props: TableMenuPropsType) => {
    const packID = useSelector<AppRootStateType, string>(state=>state.deck.currentPack)
    const dispatch = useDispatch()
    const test = [
        {
            name: 'Имя для новой колоды',
            mode: 'add'
        },
        {
            name: "Введите новое имя",
            mode: 'change'
        },
        {
            name: "Вы уверены что хотите удалить колоду?",
            mode: 'delete'
        }]
    const currentData = test.find(el => el.mode === props.model)
    const [value, setValue] = useState<string>('')

    const cancelCreatingNewPack = () => {
        dispatch(changeModeModal('notShow'))
    }
    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const creatingNewPack = () => {
        if (props.model === 'add') {
            dispatch(creatingNewPackTC(value))
        } else if (props.model === 'change') {
            dispatch(changedNamePackTC(value, packID))
        } else if(props.model=== 'delete') {
            dispatch(deletePacksCardTC(packID))
        }
        dispatch(changeModeModal('notShow'))
    }
    return (
        <div>
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100vw',
                        height: '100vh',
                        background: 'black',
                        opacity: 0.35,
                        zIndex: 20,
                    }}
                    onClick={() => {
                    }
                    }
                />
            </div>
            <div className={s.menu}>
                {currentData && <h3>{currentData.name}</h3>}
                {props.model !== 'delete' && <input type="text" value={value} onChange={changedValue}/>}
                <div>
                    <button onClick={creatingNewPack}>ok</button>
                    <button onClick={cancelCreatingNewPack}>cancel</button>
                </div>
            </div>
        </div>


    );
};
export default ModelForPacks;