import React from 'react';
import s from './Preloader.module.scss'
export const Preloader = () => {

    return (
        /** Есть желание сделать лутше, только рад*/
        <div className={s.body}>
           <h1 className={s.loading}>Loading...</h1>
        </div>
)
}