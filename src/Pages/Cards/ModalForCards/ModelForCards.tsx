import React, {ChangeEvent, useState} from 'react';
import s from '../../Deck/ModalForDeck/ModelForPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeModeModal, ModelType} from "../../../Store/Reducers/AppReducer";
import {addedCardsTC,  changeCardsTC, deleteCardsTC} from '../../../Store/Reducers/CardsReducer';
import {AppRootStateType} from "../../../Store/Store";


type TableMenuPropsType = {
    model: ModelType
}

const ModelForCards = (props: TableMenuPropsType) => {
    const cardID = useSelector<AppRootStateType, string>(state => state.cards.currentPack)
    const dispatch = useDispatch()
    const data = [
        {
            name: 'Создание карты',
            mode: 'add',
        },
        {
            name: "Изменение карты",
            mode: 'change',
        },
        {
            name: "Вы уверены что хотите удалить карту?",
            mode: 'delete'
        }]
    const currentData = data.find(el => el.mode === props.model)
    const [valueAn, setValueAn] = useState<string>('')
    const [valueQu, setValueQu] = useState<string>('')

    const changedValueAn = (e: ChangeEvent<HTMLInputElement>) => {
        setValueAn(e.currentTarget.value)
    }

    const changedValueQu = (e: ChangeEvent<HTMLInputElement>) => {
        setValueQu(e.currentTarget.value)
    }

    const cancelCreatingNewPack = () => {
        dispatch(changeModeModal('notShow'))
    }

    const creatingNewPack = () => {
        if (props.model === 'add') {
            dispatch(addedCardsTC(cardID, valueQu, valueAn))
        } else if (props.model === 'change') {
            dispatch(changeCardsTC(cardID, valueQu, valueAn))
        } else if (props.model === 'delete') {
            dispatch(deleteCardsTC(cardID))
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
                {props.model !== 'delete' && <div>
                    <p>Вопрос</p>
                    <input type="text" value={valueQu} onChange={changedValueQu}/>
                    <p>Ответ</p>
                    <input type="text" value={valueAn} onChange={changedValueAn}/>
                </div>}
                <div>
                    <button onClick={creatingNewPack}>ok</button>
                    <button onClick={cancelCreatingNewPack}>cancel</button>
                </div>
            </div>
        </div>
    );
};
export default ModelForCards;