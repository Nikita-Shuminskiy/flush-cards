import SuperInputText from '../../../Common/Test/c1-SuperInputText/SuperInputText';
import Table from '../../Table/Table';
import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from './PacksList.module.css'
import {useDispatch} from 'react-redux';
import {searchNameTC} from '../../../Store/Reducers/DeckReducer';

export const PacksList = React.memo(() => {
    const [findByName, setFindByName] = useState<string>('')
    const dispatch = useDispatch()
    const handleChangeFindName = (e: ChangeEvent<HTMLInputElement>) => setFindByName(e.currentTarget.value)
    const onSubmit = () => {
        dispatch(searchNameTC(findByName))
    }
    return (
        <div className={s.container}>
            <h3>Packs list</h3>
            <div className={s.header}>
                <SuperInputText name={'SearchByName'} placeholder={'Search by name'} onChange={handleChangeFindName}/>
                <SuperInputText/>
                <SuperButton value={'Add new pack'} onClick={onSubmit}/>
            </div>
            <div>
                <Table/>
            </div>
            <div>
                Pagination
            </div>
        </div>
    );
});