import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css'


type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const Login = () => {
    let [login, setLogin] = useState<LoginParamsType>({
        email: '',
        password: '',
        rememberMe: false
    })
    const [error, setError] = useState<string>('')

    const onSubmit = () => {
        if (login.email !== '' && login.email.length > 7
            && login.password !== '' && login.password.length > 7) {
            setError('')
        } else {
            setError('Incorrect username or passwords')
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => login.email = e.currentTarget.value
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) =>  login.password = event.currentTarget.value
    const handleChangeRememberMe = (event: ChangeEvent<HTMLInputElement>) =>  login.rememberMe = event.currentTarget.checked
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
            <div className={style.error} >{error !== '' && error}</div>
            <div>
                <label>Remember me</label><input type="checkbox" onChange={handleChangeRememberMe} name={'rememberMe'}/>
            </div>
            <div>
                <a href="#/login"  title={'Forgot your password?'}>Forgot Password</a>
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