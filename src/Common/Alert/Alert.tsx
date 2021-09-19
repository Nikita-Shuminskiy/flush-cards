import React, {useEffect} from 'react';
import {AlertContentType} from '../../Store/Reducers/AppReducer';
import styles from './Alert.module.scss'

type AlertComponentType = {
    alertList?: AlertContentType[]
    onCloseAlert: (id: number) => void
}


export const Alert: React.FC<AlertComponentType> = ({alertList, onCloseAlert}) => {

    useEffect(() => {
        if (!alertList) {
            return
        }
        let newAlertList = alertList.filter(el => el.type !== 'error')
        if (newAlertList.length !== 0) {
            setTimeout(() => {
                onCloseAlert(newAlertList[0].id)
            }, 2000)
        }
    }, [alertList?.length])


    return (
        <div className={styles.alert}>
            {alertList?.map(el => {
                let type = el.type
                return (
                    <div
                        className={`${styles.alert__item} ${styles[type]}`}
                        onClick={() => onCloseAlert(el.id)}
                        key={el.id}
                    >

                        <div className={styles.alert__item_inner}>
                            <p className={styles.alert__item_text}>{el.type.toUpperCase()}<span>{el.title}</span></p>
                            <span className={styles.alert__item_cross}/>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

