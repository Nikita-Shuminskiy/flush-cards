import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const NavBar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/entrynewpassword'}>Entrynewpassword</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/test'}>test</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/registration'}>Registration</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/login'}>Login</NavLink></div>
            </nav>
        </div>
    );
};

export default NavBar;