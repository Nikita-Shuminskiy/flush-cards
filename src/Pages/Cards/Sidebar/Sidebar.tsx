import {Switcher} from './Swicher/Switcher';
import React from 'react';
import s from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={s.main}>
            <Switcher/>
            <div>
                Number of cards
            </div>
            <div>
                555
            </div>
            <input type="range" name="range" min="0" max="100" value="99"/>
        </div>
    );
}