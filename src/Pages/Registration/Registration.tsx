import React, { ChangeEvent, useState } from 'react';
import style from './Registration.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { registrationTS } from '../../Store/Reducers/RegistrationReducer';
import { AppRootStateType } from '../../Store/Store';
import { Redirect } from 'react-router-dom';


export type RegistrationFormType = {
    email: string
    password: string
    confirmPassword?: string
}

export type RegistrationType = {}
export const Registration = (props: RegistrationType) => {
    const initUser = useSelector<AppRootStateType, boolean>(state => state.registration.initUser)
    const dispatch = useDispatch()

    const errMessage = 'Do not coincide with passwords'

    let [formData, setFormData] = useState<RegistrationFormType>({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [invalidPassword, setInvalidPassword] = useState<string>('')

    const onSubmit = () => {
        if (formData.password === formData.confirmPassword) {
            dispatch(registrationTS(formData))
            setInvalidPassword('')
        } else {
            setInvalidPassword(errMessage)
        }
    }


    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        email: e.currentTarget.value
    })
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        password: e.currentTarget.value
    })
    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        confirmPassword: e.currentTarget.value
    })

    if (initUser){
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
            <div>
                <label>Email: </label> <input onChange={handleChangeEmail} name={'email'} type="email"/>
            </div>
            <div>
                <label>Password: </label> <input onChange={handleChangePassword} name={'Password'} type={'password'}/>
            </div>
            <div>
                <label>Confirm password:</label> <input onChange={handleConfirmPassword} name={'Confirm'}
                                                       type={'password'}/>
                <div className={style.error}>{invalidPassword !== '' && invalidPassword}</div>
            </div>
            <div>
                <button onClick={onSubmit}>REGISTRATION</button>
                <button>CANCEL</button>
            </div>
        </div>
    );
}