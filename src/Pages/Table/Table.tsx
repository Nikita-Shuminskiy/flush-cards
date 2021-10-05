import React, { useEffect } from 'react'
import HeaderTable from './ComponentsTable/HeaderTable'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../Store/Store';
import { CardPackType, getPacksCardTC, setPrivatPacks } from '../../Store/Reducers/DeckReducer';
import s from './Table.module.css'


const Table = () => {
    const dispatch = useDispatch()
    const isCheckedMyPacks = useSelector<AppRootStateType, boolean>(state => state.deck.isCheckedMyPacks)

    useEffect(() => {
        if (isCheckedMyPacks) {
            dispatch(setPrivatPacks())
        } else {
            dispatch(getPacksCardTC())
        }
    }, [isCheckedMyPacks])
    return (
        <div className={s.table}>
            <HeaderTable/>
        </div>
    )
}
export default Table