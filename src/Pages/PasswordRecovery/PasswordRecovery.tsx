import React, {ChangeEvent, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './PasswordRecovery.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {recoveryPasswordTC} from '../../Store/Reducers/RegistrationReducer';
import {AppRootStateType} from '../../Store/Store';


export const PasswordRecovery = () => {
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')
    const isEmail = useSelector<AppRootStateType, string>(state => state.registration.email)
    const dispatch = useDispatch()
    const onSubmit = () => {

        if (!email) {
            setError('Required');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Invalid email address');
        }
        console.log(email)
        email && dispatch(recoveryPasswordTC(email))
    }

    if (isEmail !== '') {
        return <Redirect to={'/check-email'}/>
    }
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    return (
        <div>
            <h2>Forgot your password?</h2>
            <div>
                <input name={'email'} type={'email'} placeholder={'Email'} onChange={handleChangeEmail}/>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
            <p>Enter your email address and we will send you further instructions</p>
            <button onClick={onSubmit}>Send Instructions</button>
            <p>Did you remember your password?</p>
            <NavLink to={'/login'} className={s.link}>Try logging in</NavLink>
        </div>
    );
}