import React, { ChangeEvent, useState } from 'react';
import style from './Registration.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { registrationTC } from '../../Store/Reducers/RegistrationReducer';
import { AppRootStateType } from '../../Store/Store';
import {NavLink, Redirect} from 'react-router-dom';
import SuperInputText from "../../Common/Test/c1-SuperInputText/SuperInputText";
import SuperButton from "../../Common/Test/c2-SuperButton/SuperButton";

//type
export type RegistrationFormType = {
    email: string
    password: string
    confirmPassword?: string
}
export type RegistrationType = {}


export const Registration = (props: RegistrationType) => {
    const  initUser  = useSelector<AppRootStateType, boolean>(state => state.registration.initUser)
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
            dispatch(registrationTC(formData))
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

    return <div className={style.wrapContainer}>
        <div className={style.container}>
            <h1>Registration</h1>
            <div>
                <SuperInputText name={'email'} type={'email'} onChange={handleChangeEmail} placeholder={'Email'}/>
            </div>
            <div>

                <SuperInputText name={'password'} type={'password'} onChange={handleChangePassword}
                                placeholder={'Password'}/>
            </div>
            <div>

                <SuperInputText name={'confirm'} type={'password'} onChange={handleConfirmPassword}
                                placeholder={'confirm'}/>
                <div className={style.error}>{invalidPassword !== '' && invalidPassword}</div>
            </div>
            <div className={style.button}>
                <SuperButton onClick={onSubmit} value={'REGISTRATION'}/>
            </div>
            <div>
                <NavLink to={'/login'} className={style.link}>Login</NavLink>
            </div>
        </div>

        </div>
}