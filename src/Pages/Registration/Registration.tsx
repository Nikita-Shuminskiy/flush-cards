import React, { ChangeEvent, useState } from 'react';
import style from './Registration.module.css'
import { registerApi } from '../../Dal/Api';


export type RegistrationFormType = {
    email: string
    password: string
    confirmPassword?: string
}

export type RegistrationType = {}
export const Registration = (props: RegistrationType) => {
    const errMessage = 'Do not coincide with passwords'

    const initState = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    let [formData, setFormData] = useState<RegistrationFormType>(initState)

    const [invalidPassword, setInvalidPassword] = useState<string>('')

    const onSubmit = () => {
        if (formData.password === formData.confirmPassword) {
            setInvalidPassword('')
        } else {
            setInvalidPassword(errMessage)
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setFormData({...initState, email: e.currentTarget.value})
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>  setFormData({...initState, password: e.currentTarget.value})
    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) =>  setFormData({...initState, confirmPassword: e.currentTarget.value})
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