import React from 'react';
import SuperInputText from './c1-SuperInputText/SuperInputText';
import SuperCheckbox from './c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './c2-SuperButton/SuperButton';
import {useDispatch, useSelector } from 'react-redux';
import {AppRootStateType} from "../../Store/Store";
import {AlertContentType, configAlert, removeAlert, setAlertList} from '../../Store/Reducers/AppReducer';
import { Alert } from '../Alert/Alert';

const Test = () => {
    const dispatch = useDispatch()
    const alertList = useSelector<AppRootStateType, AlertContentType[]>(state => state.app.alertList)


    // test Alert hendler
    const errorHendler = () => {
        dispatch(setAlertList(configAlert('error', 'Error')))
    }

    const successHendler = () => {
        dispatch(setAlertList(configAlert('success', 'success')))
    }

    const warningHendler = () => {
        dispatch(setAlertList(configAlert('info', 'info')))
    }

    const infoHendler = () => {
        dispatch(setAlertList(configAlert('warning', 'warning')))
    }


    const onCloseAlert = (id: number) => {
        dispatch(removeAlert(id))
    }

    return (
        <div>
            <SuperInputText/>
            <SuperCheckbox/>
            <SuperButton />


            <>
                <button onClick={errorHendler}>Error</button>
                <button onClick={successHendler}>Success</button>
                <button onClick={warningHendler}>Info</button>
                <button onClick={infoHendler}>Warning</button>

                <Alert onCloseAlert={onCloseAlert} alertList={alertList}/>
            </>
        </div>
    );
};

export default Test;