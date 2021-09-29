import Table from '../../Table/Table';
import React, {useState} from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from './PacksList.module.css'
import {useDispatch} from 'react-redux';
import {searchNameTC} from '../../../Store/Reducers/DeckReducer';
import TableMenu from '../../Table/ComponentsTable/TableMenu';
import {SearchByName} from '../../../Common/Search/SearchByName';

export const PacksList = React.memo(() => {
    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const dispatch = useDispatch()
      const handlerSearchName = (name:string) => dispatch(searchNameTC(name))
    const onSubmit = () => {
        setStatus(true)
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
                Pagination
            </div>
            {status && <TableMenu clearMenu={clearMenu}/>}
        </div>
    );
});