import React from 'react';
import styles from './Profile.module.scss'
import defaultAvatar from '../../Images/user.svg'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../Store/Store';
import {DataUserType} from '../../Store/Reducers/AppReducer';
import Table from '../Table/Table';
import SuperInputText from '../../Common/Test/c1-SuperInputText/SuperInputText';

export const Profile = () => {

    const userData = useSelector<AppRootStateType, DataUserType | null>(state => state.app.userData)

    return (

        <section className={styles.profile}>
            <div className={'container'}>
                <div className={styles.profile__inner}>
                    <div className={styles.profile__info}>
                        <div className={styles.profile__avatar}>
                            <img src={userData?.avatar ? userData.avatar : defaultAvatar} alt=" "/>
                        </div>
                        <div className={styles.profile__description}>
                            <p>{userData?.email}</p>
                        </div>
                        <div>
                            Number of cards
                        </div>
                        <div>
                            555
                        </div>
                        <input type="range" name="range" min="0" max="100" value="99"/>
                    </div>
                    <div>
                        <div>
                            <div>
                                Packs list Petr’s
                            </div>
                            <SuperInputText/>
                        </div>
                        <div>
                            <Table/>
                        </div>
                        <div>
                            Pagination
                        </div>
                    </div>

                </div>

            </div>
        </section>


    );
}