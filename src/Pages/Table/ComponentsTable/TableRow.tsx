import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {apiPack} from '../../../Dal/Api';
import s from './TableRow.module.css'
import {useDispatch} from "react-redux";
import {getCard} from "../../../Store/Reducers/DeckReducer";

type DataCardsProps = {
    name: string
    countCard: number
    created: string
    rating: number
    id: string
}

const TableRow = (props: DataCardsProps) => {
    console.log('rerender')
    const [status, setStatus] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.name)
    const changedValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }


    const dispatch = useDispatch()
    const test = () => {
        deletePack(props.id)
    }
    const deletePack = (id: string) => {
        apiPack.deletePack(id)
            .then((res) => {
                console.log(res)
                apiPack.getPacks()
                    .then((res) => {
                        dispatch(getCard(res.data.cardPacks))
                    })
            })
    }
    const onChangeNamePack = () => {
        setStatus(!status)
    }

   const newNamePack = () => {
        apiPack.changedPack("newPack02", '6152d6253980d4286072665f')
            .then((res)=>{
                setStatus(false)

            })
            .catch((error)=> {
                setStatus(false)
            })
   }
 // const testTwo = () => {
 //     newNamePack(value, props.id)
 // }

    return (
        <div>
            <div className={s.table}>
                {!status ? <div>{value}</div>
                    : <div><input type="text" value={value}  onChange={changedValue} />
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
                    <button onClick={test}>delete</button>
                </div>
            </div>

        </div>
    );
};

export default TableRow;