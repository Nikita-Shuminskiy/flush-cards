import React from 'react';
import s from './Switcher.module.css'
export const Switcher = () => {
    return (
        <>
            <label className={s.switch}>
                <input type="checkbox" id="togBtn"/>
                    <div className={s.slider}></div>
            </label>
        </>
    );
}