import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {isLoginTC} from '../../Store/Reducers/LoginReducer';
import {AppRootStateType} from '../../Store/Store';

import SuperInputText from "../../Common/Test/c1-SuperInputText/SuperInputText";
import SuperCheckbox from '../../Common/Test/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from "../../Common/Test/c2-SuperButton/SuperButton";
import style from './Login.module.css'


type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}
//test123
export const Login = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    let [login, setLogin] = useState<LoginParamsType>({
        email: '',
        password: '',
        rememberMe: false
    })


    const onSubmit = () => {
        dispatch(isLoginTC(login.email, login.password, login.rememberMe))
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setLogin({...login, email: e.currentTarget.value})
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setLogin({
        ...login,
        password: e.currentTarget.value
    })
    const handleChangeRememberMe = (e: ChangeEvent<HTMLInputElement>) => setLogin({
        ...login,
        rememberMe: e.currentTarget.checked
    })
    if (status) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.wrapContainer}>
            <div className={style.container}>
                <div>
                    <h1>Welcome</h1>
                    <h3>Sign In</h3>
                </div>
                <div>
                    <SuperInputText name={'email'} type={'email'} onChange={handleChangeEmail} placeholder={'Email'}/>
                </div>
                <div>
                    <SuperInputText name={'password'} type={'password'} onChange={handleChangePassword}
                                    placeholder={'Password'}/>
                </div>
                <div>
                    <label>Remember me</label> <SuperCheckbox type="checkbox" onChange={handleChangeRememberMe} name={'rememberMe'}/>
                </div>
                <div>
                    <NavLink to={'/recoverypassword'} className={style.link}>Forgot Password</NavLink>
                </div>
                <div>
                    <SuperButton onClick={onSubmit} value={'Login'}/>
                </div>
                <div>
                    <NavLink to={'/registration'} className={style.link}>Register</NavLink>
                </div>
            </div>

        </div>

    );
}

function setEditModeRecoveryPassword(arg0: boolean): any {
    throw new Error('Function not implemented.');
}
