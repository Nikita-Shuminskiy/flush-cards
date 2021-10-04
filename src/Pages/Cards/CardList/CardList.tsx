import React from 'react';
import SuperButton from '../../../Common/Test/c2-SuperButton/SuperButton';
import s from '../../Deck/PacksList/PacksList.module.css'
import CardsTable from "../../TableForCards/CardsTable";
import {NavLink} from "react-router-dom";
import style from "../../Login/Login.module.css";
import ModelForCards from '../ModalForCards/ModelForCards';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Store/Store";
import {changeModeModal, ModelType} from "../../../Store/Reducers/AppReducer";

export const CardList = React.memo(() => {
    const dispatch = useDispatch()
    const modeModel = useSelector<AppRootStateType, ModelType>(state => state.app.model)
    const onSubmit = () => {
        dispatch(changeModeModal('add'))
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
            {modeModel !== 'notShow' && <ModelForCards model={modeModel}/>}
        </div>
    );
});