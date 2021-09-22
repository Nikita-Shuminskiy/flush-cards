import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoginTC } from '../../Store/Reducers/LoginReducer';
import { AppRootStateType } from '../../Store/Store';
import style from './Login.module.css'


type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}
//test123
export const Login = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, boolean>(state=>state.login.isLoggedIn)
    let [login, setLogin] = useState<LoginParamsType>({
        email: '',
        password: '',
        rememberMe: false
    })


    const onSubmit = () => {
        dispatch(isLoginTC(login.email, login.password, login.rememberMe))
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setLogin({...login, email: e.currentTarget.value})
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setLogin({...login, password: e.currentTarget.value})
    const handleChangeRememberMe = (e: ChangeEvent<HTMLInputElement>) => setLogin({...login, rememberMe: e.currentTarget.checked})
   if(status) {
       return <Redirect to={'/profile'}/>
   }
    return (
        <div className={style.login} >
            <div className={style.title}>
                <h1>Welcome to site</h1>
                <h3>Sign In</h3>
            </div>
            <div>
                <label>Email:</label> <input onChange={handleChangeEmail}  title={'enter email'} type="email" name={'email'}/>
            </div>
            <div>
                <label>Password:</label> <input onChange={handleChangePassword} title={'enter password'} type="password" name={'password'}/>
            </div>
            <div>
                <label>Remember me</label><input type="checkbox" onChange={handleChangeRememberMe} name={'rememberMe'}/>
            </div>
            <div>
                <a href="#/recoverypassword"  title={'Forgot your password?'}>Forgot Password</a>
            </div>
            <div>
                <button className={style.button} onClick={onSubmit}> Sign In</button>
            </div>
            <div>
                <a href="#/registration" title={"Don't have an account?"}>Register</a>
            </div>
        </div>

    );
}