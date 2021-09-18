import React, { ChangeEvent, useState } from 'react';
import style from './Registration.module.css'


type RegistrationFormType = {
    email: string
    password: string
    confirmPassword: string
}

export type RegistrationType = {}
export const Registration = (props: RegistrationType) => {
    const errMessage = 'Do not coincide with passwords'
    let [formData, setFormData] = useState<RegistrationFormType>({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [invalidPassword, setInvalidPassword] = useState<string>('')

    const onSubmit = () => {
        if (formData.password === formData.confirmPassword) {
            console.log(formData)
            setInvalidPassword('')
        } else {
            setInvalidPassword(errMessage)
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => formData.email = e.currentTarget.value
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) =>  formData.password = event.currentTarget.value
    const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) =>  formData.confirmPassword = event.currentTarget.value
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