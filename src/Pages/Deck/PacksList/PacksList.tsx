import Table from '../../Table/Table';
import React, { useState } from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from './PacksList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeckInitStateType, getUserThunk, searchNameTC } from '../../../Store/Reducers/DeckReducer';
import { SearchByName } from '../../../Common/Search/SearchByName';
import { AppRootStateType } from '../../../Store/Store';
import { Paginator } from '../../../Common/Test/Paginator/Paginator';
import TableMenu from '../../Table/ComponentsTable/TableMenu';

export const PacksList = React.memo(() => {
    const dispatch = useDispatch()
    const {cardPacksTotalCount, pageCount, cardPacks, page}
        = useSelector<AppRootStateType, DeckInitStateType>(state => state.deck)
    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const handlerSearchName = (name: string) => dispatch(searchNameTC(name))
    const onSubmit = () => {
        setStatus(true)
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
            {status && <TableMenu clearMenu={clearMenu}/>}
        </div>
    );
});