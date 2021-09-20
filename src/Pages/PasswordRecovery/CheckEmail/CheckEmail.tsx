import React from 'react';
import envelope from '../../../Images/envelope.png'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../Store/Store';


export const CheckEmail = () => {
    const email = useSelector<AppRootStateType, string>(state => state.registration.email)

    return (
        <div>
            <img src={envelope} alt = {'envelope'}/>
            <h2>Check Email</h2>
            <p>We’ve sent an Email with instructions to {email}</p>
        </div>
    );
}