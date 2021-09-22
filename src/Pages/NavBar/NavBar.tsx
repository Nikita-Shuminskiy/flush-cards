import React from 'react';
import {NavLink, Redirect, Route, useHistory} from 'react-router-dom';
import s from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../Store/Store';
import {isLogoutTC} from '../../Store/Reducers/LoginReducer';

const NavBar = () => {
    let {isLoggedIn} = useSelector<AppRootStateType, any>(state => state.login)
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutHandler = () => {
        dispatch(isLogoutTC(false))
    }

    if ((!isLoggedIn) && (<Route path={'/set-new-password/'}/>)) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <div className={s.nav}>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/profile'}>Profile</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/test'}>test</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/registration'}>Registration</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/login'}>Login</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink activeClassName={s.active}
                                                                   to={'/recoverypassword'}>
                    Password Recovery</NavLink></div>
                <div className={`${s.item}`}><NavLink activeClassName={s.active} to={'/set-new-password'}>Entry New
                    Password</NavLink></div>
                {isLoggedIn && <button onClick={logoutHandler}>LOGOUT</button>}
            </div>
        </div>
    );
};

export default NavBar;