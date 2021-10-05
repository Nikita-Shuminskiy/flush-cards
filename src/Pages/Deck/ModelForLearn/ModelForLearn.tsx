import React, {ChangeEvent, useState} from 'react';
import s from './ModelForLearn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changedNamePackTC, creatingNewPackTC, deletePacksCardTC} from '../../../Store/Reducers/DeckReducer';
import {changeModeModal, ModelType, setStatusTraining} from "../../../Store/Reducers/AppReducer";
import {AppRootStateType} from "../../../Store/Store";





const ModelForLearn = () => {
    const dispatch = useDispatch()
    const changedStatusTraining = () => {
        dispatch(setStatusTraining(false))
    }

    return (
        <div>
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100vw',
                        height: '100vh',
                        background: 'black',
                        opacity: 0.35,
                        zIndex: 20,
                    }}
                    onClick={changedStatusTraining}
                />
            </div>
            <div className={s.menu}>
              <h3>Title</h3>
                <p>Вопрос</p>
                <div>
                    <button onClick={changedStatusTraining}>cancel</button>
                    <button >show answer</button>
                </div>
            </div>
        </div>


    );
};
export default ModelForLearn;