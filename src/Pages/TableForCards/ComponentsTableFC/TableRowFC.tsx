import React, {ChangeEvent, useState} from 'react';
import s from './TableRowFC.module.css'
import {useDispatch} from "react-redux";
import {changedNamePackTC, deletePacksCardTC} from "../../../Store/Reducers/DeckReducer";
import {changeCardsTC, deleteCardsTC } from '../../../Store/Reducers/CardsReducer';


type DataCardsProps = {
    question: string
    answer: string
    update: string
    rating: number
    id: string
}

const TableRowFC = (props: DataCardsProps) => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState<boolean>(false)
    const [valueAn, setValueAn] = useState<string>(props.answer)
    const [valueQu, setValueQu] = useState<string>(props.question)

    const changedValueAn = (e: ChangeEvent<HTMLInputElement>) => {
        setValueAn(e.currentTarget.value)
    }
    const changedValueQu = (e: ChangeEvent<HTMLInputElement>) => {
        setValueQu(e.currentTarget.value)
    }
    const deleteCard = () => {
        dispatch(deleteCardsTC(props.id))
    }
    const newNamePack = () => {
        dispatch(changeCardsTC(props.id, valueQu, valueAn))
        setStatus(false)
    }
    const onChangeNamePack = () => {
        setStatus(!status)
        setValueAn(props.question)
    }
    return (
        <div>
            <div className={s.table}>
                <div>
                        {!status
                            ? <div>
                                {props.question
                                }</div>
                            : <div><input type="text" value={valueQu} onChange={changedValueQu}/>
                                <button onClick={newNamePack}>Ok</button>
                            </div>
                        }
                </div>
                <div>
                    {!status
                        ? <div>
                            {props.answer
                            }</div>
                        : <div><input type="text" value={valueAn} onChange={changedValueAn}/>
                            <button onClick={newNamePack}>Ok</button>
                        </div>
                    }
                </div>
                <div>{props.update}</div>
                <div>{props.rating}</div>
                <div className={s.menu}>
                    {!status ? <button onClick={onChangeNamePack}>change</button>
                        : <button onClick={onChangeNamePack}>cancel</button>
                    }
                    <button onClick={deleteCard}>delete</button>
                </div>
            </div>

        </div>
    );
};

export default TableRowFC;