import SuperInputText from '../../../Common/Test/c1-SuperInputText/SuperInputText';
import Table from '../../Table/Table';
import React from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from './PacksList.module.css'

export const PacksList = () => {
    return (
        <div className={s.container}>
            <h3>Packs list</h3>
            <div className={s.header}>

                <SuperInputText/>
                <SuperInputText/>
                <SuperButton value={'Add new pack'}/>
            </div>
            <div>
                <Table/>
            </div>
            <div>
                Pagination
            </div>
        </div>
    );
}