import React, {ChangeEvent, useState} from 'react';
import s from '../../Deck/ModalForDeck/ModelForPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeModeModal, ModelType} from "../../../Store/Reducers/AppReducer";
import {addedCardsTC, CardInitStateType, changeCardsTC, deleteCardsTC} from '../../../Store/Reducers/CardsReducer';
import {AppRootStateType} from "../../../Store/Store";
import {useEffect} from 'react';


type TableMenuPropsType = {
    model: ModelType
}
type testType = {
    answer: string,
    question: string
}
const ModelForCards = (props: TableMenuPropsType) => {
    const packID = useSelector<AppRootStateType, string>(state => state.deck.currentPack)
    const {currentCardID, cards} = useSelector<AppRootStateType, CardInitStateType>(state => state.cards)
    const dispatch = useDispatch()
    const currentCard = cards.find(el => el._id === currentCardID)
    useEffect(() => {
        if (currentCard && currentCard.answer !== valueAn) {
            setValueAn(currentCard.answer)
            setValueQu(currentCard.question)
        }
    }, [])
    const [valueAn, setValueAn] = useState<string>('')
    const [valueQu, setValueQu] = useState<string>('')

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


    const changedValueAn = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
            dispatch(addedCardsTC(packID, valueQu, valueAn))
        } else if (props.model === 'change') {
            dispatch(changeCardsTC(currentCardID, valueQu, valueAn))
        } else if (props.model === 'delete') {
            dispatch(deleteCardsTC(currentCardID))
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
                    <textarea   value={valueAn} className={s.answer} onChange={changedValueAn} ></textarea>
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