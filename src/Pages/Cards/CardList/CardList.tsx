import React, { useState} from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from '../../Deck/PacksList/PacksList.module.css'
import CardsTable from "../../TableForCards/CardsTable";
import MenuAddCard from '../../TableForCards/ComponentsCardsTable/MenuAddCard';
import {NavLink} from "react-router-dom";
import style from "../../Login/Login.module.css";

export const CardList = React.memo(() => {


  /**  Что бы было легче переделать */


    const [status, setStatus] = useState<boolean>(false)
    const clearMenu = () => {
        setStatus(false)
    }
    const onSubmit = () => {
        setStatus(true)
    }
    return (
        <div className={s.container}>
            <h3>Cards list</h3>
            <div className={s.header}>
                <NavLink to={'/deck'} className={style.link}>Back</NavLink>
                <SuperButton value={'Add new card'} onClick={onSubmit}/>
            </div>
            <div>
                <CardsTable/>
            </div>
            <div>
                Pagination
            </div>
            {status && <MenuAddCard clearMenu={clearMenu}/>}
        </div>
    );
});