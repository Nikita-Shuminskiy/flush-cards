import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNewPasswordTC} from '../../Store/Reducers/RegistrationReducer';
import {Redirect, useParams} from 'react-router-dom';
import {AppRootStateType} from '../../Store/Store';


export const NewPassword = () => {
    const successedPassword = useSelector<AppRootStateType, boolean>(state => state.registration.successedPassword)
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()
    console.log(token)
    const onSubmit = () => {
        if (!password) {
            setError('Required');
        } else if (password.length < 3) {
            setError('The password is too small');
        } else if (!(confirmPassword === password)) {
            setError('The passwords are different!')
        }
        /** Бага почемуто нету очищения импута*/
        // email
        dispatch(setNewPasswordTC(password, token))
        setPassword('')
        setConfirmPassword('')
    }
    if (successedPassword) {
        return <Redirect to={'/login'}/>
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)
    return (
        <div>
            <h2>Create new password</h2>
            <div>
                <input name={'password'} type={'password'}
                       placeholder={'Password'} onChange={handleChangePassword}/>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
            <div>
                <input name={'password'} type={'password'}
                       placeholder={'Confirm password'}
                       onChange={handleChangeConfirmPassword}/>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
            <p>Create new password and we will send you further instructions to email</p>
            <button onClick={onSubmit}>Create new password</button>

        </div>
    );
}