import React from 'react';
import styles from './Profile.module.scss'
import defaultAvatar from '../../Images/user.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/Store";
import {DataUserType} from '../../Store/Reducers/AppReducer';

export const Profile = () => {

    const userData = useSelector<AppRootStateType, DataUserType | null>(state => state.app.userData)

    return (
        <section className={styles.profile}>
            <div className={"container"}>
                <div className={styles.profile__inner}>
                    <div className={styles.profile__info}>
                        <div className={styles.profile__avatar}>
                            <img src={userData?.avatar ? userData.avatar : defaultAvatar} alt=" "/>
                        </div>
                        <div className={styles.profile__description}>
                            <p>{userData?.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}