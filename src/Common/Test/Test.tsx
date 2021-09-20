import React from 'react';
import SuperInputText from './c1-SuperInputText/SuperInputText';
import SuperCheckbox from './c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './c2-SuperButton/SuperButton';
import {useDispatch, useSelector } from 'react-redux';
import {AppRootStateType} from "../../Store/Store";
import {AlertContentType, configAlert, setAlertList} from '../../Store/Reducers/AppReducer';
import { Alert } from '../Alert/Alert';

const Test = () => {
    const dispatch = useDispatch()
    const alertList = useSelector<AppRootStateType, AlertContentType[]>(state => state.app.alertList)


    const errorHendler = () => {
        dispatch(setAlertList(configAlert('error', 'Error')))
    }
    const successHendler = () => {

    }
    const warningHendler = () => {

    }

    const infoHendler = () => {

    }


    const onCloseAlert = (id: string) => {

    }

    return (
        <div>
            <SuperInputText/>
            <SuperCheckbox/>
            <SuperButton />


            <>
                <button onClick={errorHendler}>Error</button>
                <button onClick={successHendler}>Error</button>
                <button onClick={warningHendler}>Error</button>
                <button onClick={infoHendler}>Error</button>

                <Alert onCloseAlert={onCloseAlert} alertList={alertList}/>
            </>
        </div>
    );
};

export default Test;