import SuperInputText from '../../../Common/Test/c1-SuperInputText/SuperInputText';
import Table from '../../Table/Table';
import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from '../../Deck/PacksList/PacksList.module.css'
import {useDispatch} from 'react-redux';
import {searchNameTC} from '../../../Store/Reducers/DeckReducer';
import TableMenu from "../../Table/ComponentsTable/TableMenu";

export const CardList = React.memo(() => {


  /**  Что бы было легче переделать */


    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const [findByName, setFindByName] = useState<string>('')
    const dispatch = useDispatch()
    const handleChangeFindName = (e: ChangeEvent<HTMLInputElement>) => setFindByName(e.currentTarget.value)
    const onEnterHandler = () => {
        const validate = findByName.trim()
        dispatch(searchNameTC(validate))
        setFindByName('')
    }
    const onSubmit = () => {
        setStatus(true)
    }
    return (

        <div className={s.container}>
            <h3>Packs list</h3>
            <div className={s.header}>
                <SuperInputText name={'SearchByName'} placeholder={'Search by name (onEnter)'}
                                onEnter={onEnterHandler} onChange={handleChangeFindName}
                                style={{width:'400px'}}
                />
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