import Table from '../../Table/Table';
import React, { useState } from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from './PacksList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeckInitStateType, getUserThunk, searchNameTC } from '../../../Store/Reducers/DeckReducer';
import { SearchByName } from '../../../Common/Search/SearchByName';
import { AppRootStateType } from '../../../Store/Store';
import { Paginator } from '../../../Common/Test/Paginator/Paginator';
import TableMenuTest from '../../../Common/Test/TableMenuTest';
import {changeModeModal, ModelType } from '../../../Store/Reducers/AppReducer';

export const PacksList = React.memo(() => {
    const modeModel = useSelector<AppRootStateType, ModelType>(state=> state.app.model)
    const[mode, setMode] = useState(modeModel)
    const dispatch = useDispatch()
    const {cardPacksTotalCount, pageCount, cardPacks, page}
        = useSelector<AppRootStateType, DeckInitStateType>(state => state.deck)
    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const handlerSearchName = (name: string) => dispatch(searchNameTC(name))
    const onSubmit = () => {
       dispatch(changeModeModal('change'))
    }
    const pageClickChange = (page: number) => {
        dispatch(getUserThunk(page, pageCount))
    }
    return (

        <div className={s.container}>
            <h3>Packs list</h3>
            <div className={s.header}>
                <SearchByName searchName={handlerSearchName}/>
                <SuperButton value={'Add new pack'} onClick={onSubmit}/>
            </div>
            <div>
                <Table/>
            </div>
            <div>
                <Paginator pageClickChange={pageClickChange} currentPage={page} pageSize={pageCount}
                           totalCount={cardPacksTotalCount}/>
            </div>
            {modeModel !== 'notShow' && <TableMenuTest clearMenu={clearMenu} model={modeModel}/>}
        </div>
    );
});