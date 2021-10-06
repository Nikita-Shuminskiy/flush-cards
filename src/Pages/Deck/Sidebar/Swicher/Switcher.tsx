import React, {ChangeEvent} from 'react';
import s from './Switcher.module.css'
import {useDispatch} from 'react-redux';
import {setIsCheckedMyPacks} from '../../../../Store/Reducers/DeckReducer';


export const Switcher = () => {
    const dispatch = useDispatch()
    const myPacksCheckedHandler = (e:ChangeEvent<HTMLInputElement>) =>
        dispatch(setIsCheckedMyPacks(e.currentTarget.checked))
    return (
        <>
            <label className={s.switch}>
                <input type="checkbox" id="togBtn" onChange={myPacksCheckedHandler} />
                    <div className={s.slider}></div>
            </label>
        </>
    );
}