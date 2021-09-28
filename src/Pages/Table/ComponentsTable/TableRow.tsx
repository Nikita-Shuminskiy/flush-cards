import React, {ChangeEvent, useState} from 'react';
import s from './TableRow.module.css'
import {useDispatch} from "react-redux";
import {changedNamePackTC, deletePacksCardTC} from "../../../Store/Reducers/DeckReducer";


type DataCardsProps = {
    name: string
    countCard: number
    created: string
    rating: number
    id: string
}

const TableRow = (props: DataCardsProps) => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.name)

    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const deletePack = () => {
        dispatch(deletePacksCardTC(props.id))
    }
    const newNamePack = () => {
        dispatch(changedNamePackTC(value, props.id))
        setStatus(false)
    }
    const onChangeNamePack = () => {
        setStatus(!status)
        setValue(props.name)
    }
    return (
        <div>
            <div className={s.table}>
                {!status
                    ? <div>
                        {value !== props.name
                            ? props.name
                            : value
                        }</div>
                    : <div><input type="text" value={value} onChange={changedValue}/>
                        <button onClick={newNamePack}>Ok</button>
                    </div>
                }
                <div>{props.countCard}</div>
                <div>{props.created}</div>
                <div>{props.rating}</div>
                <div className={s.menu}>
                    {!status ? <button onClick={onChangeNamePack}>change</button>
                        : <button onClick={onChangeNamePack}>cancel</button>
                    }
                    <button onClick={deletePack}>delete</button>
                </div>
            </div>

        </div>
    );
};

export default TableRow;