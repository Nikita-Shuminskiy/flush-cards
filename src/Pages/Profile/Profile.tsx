import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Profile.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../Store/Store';
import { ProfileDataType, profileUpdateFhotoTC } from '../../Store/Reducers/ProfileReducer';
import deafault from '../../Images/user.svg'

export const Profile = () => {
    const userData = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.profileData)
    const dispatch = useDispatch()
    const [code, setCode] = useState(false)
    const [base64, setBase64] = useState(true) // base64 - true, text - false
    const [text, setText] = useState('')
    const [file, setFile] = useState()
    const [fileURL, setFileURL] = useState()
    const [file64, setFile64] = useState<any>()
    const [fileData, setFileData] = useState<any>()
    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData()
        if (e.target?.files?.length) {
            const newFile = e.target.files && e.target.files[0]
            dispatch(profileUpdateFhotoTC(newFile))
            setFile64(newFile)
        }
    }
    return (
        <section className={styles.profile}>
            <div className={'container'}>
                <div className={styles.profile__inner}>
                    <div className={styles.profile__info}>
                        <div className={styles.profile__avatar}>
                             <img src={userData.avatar ? userData.avatar : deafault} alt=" "/>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={uploadPhoto}
                            />
                        </div>
                        <div className={styles.profile__description}>
                            <p>{userData?.email}</p>
                            <p>{userData?.name}</p>
                            <p>Your cards: {userData?.publicCardPacksCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}